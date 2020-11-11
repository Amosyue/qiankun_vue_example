<template>
    <div class="hyTable">
        <div class="popoverBox" v-if="!isHideTableBtn">
            <el-popover placement="bottom-start" popper-class="selectFieldName" width="240" trigger="hover">
                <el-checkbox-group v-model="checkedHeaders" @change="changeSelectedHeader" :min="1">
                    <el-checkbox :label="item.fieldName" :title="item.name" v-for="(item,index) in headers" :key="index">{{item.name}}</el-checkbox>
                </el-checkbox-group>
                <el-button slot="reference" size="small" class="pointer selectEle">选择字段</el-button>
            </el-popover>
            <el-button size="small" style="margin-left:5px;" class="tableFunSearch pointer" @click="advancedSearch">
                <label for class="cursor-hand pointer">
                    <i class="el-icon-caret-bottom pointer"></i>
                    <span v-if="!isShowFilte" class="text pointer">高级搜索</span>
                    <span v-else class="text pointer">清空搜索</span>
                </label>
            </el-button>
            <slot name="tableFunBox"></slot>
        </div>
        <el-table 
            class="hy-el-table" 
            ref="hyTable" 
            stripe 
            lazy 
            v-loading="option.loading" 
            element-loading-text="加载中..." 
            element-loading-spinner="el-icon-loading" 
            size="small" 
            :height="option.tableHeight" 
            :highlight-current-row="highlightCurrentrow" 
            :data="tableData.content" 
            :key="tableKey" 
            :row-key="getRowKeys" 
            :load="load" 
            :border="option.isBorder" 
            :default-expand-all="defaultExpandAll" 
            :expand-row-keys="expandRowKeys" 
            :row-class-name="tableRowClass" 
            @header-dragend="headerDragend"
            @row-click="rowClick" 
            @row-dblclick="rowDblclick" 
            @cell-click="cellClick"
            @cell-dblclick="cellDblclick"
            @selection-change="handleSelectionChange" 
            @expand-change="expandChange" 
            @select-all="selectAll" 
            :header-cell-style="{background:'rgba(245,247,250,1)',height:'40px'}" 
            :class="{'hy-el-table-searchValHide':isShowFilte==false,'hy-border-el-table':option.isBorder}">
            <!-- 序号 -->
                <el-table-column type="index" width="50" v-if="showIndex"></el-table-column>
                <!-- 是否全选 -->
                <el-table-column 
                    type="selection" 
                    :reserve-selection="true" 
                    :selectable="selectable" 
                    v-if="option.selectable">
                </el-table-column>
                <!-- 常规数据显示 -->
                <el-table-column 
                    v-for="item in tableHeaders" 
                    :render-header="renderHeader" 
                    :width="item.width?item.width:''" :min-width="minWidth" 
                    :key="item._id?item._id:item.id" 
                    :prop="item.fieldName" 
                    :sortable="item.sortable"
                    :label="item.name"
                    :show-overflow-tooltip="showOverflowTooltip"
                    :type="item.showexpend">
                        <template slot-scope="scope">
                            <template v-if="item.isCustom">
                                <slot :name="item.fieldName" :scope="scope"></slot>
                            </template>
                            <template v-else-if="item.isHtml">
                                <slot :name="item.fieldName" :scope="scope">
                                    <span v-html="scope.row[item.fieldName]"></span>
                                </slot>
                            </template>
                            <template v-else>
                                <div v-if="showOverPopover.isOpen" class="textover">
                                    <template v-if="item.dragended"> <!-- 表头拖动的情况 -->
                                        <template v-if="item.width<=getTextWidth(scope.row[item.fieldName])+20">
                                            <el-popover
                                                placement="left"
                                                popper-class="el-popover_tableFilter"
                                                trigger="hover">
                                                <div class="content" :style="{'max-width':showOverPopover.width + 'px','max-height':showOverPopover.maxHeight + 'px'}">
                                                    {{$tools.nullToString(scope.row[item.fieldName])}}
                                                </div>
                                                <span slot="reference">{{$tools.nullToString(scope.row[item.fieldName])}}</span>
                                            </el-popover>
                                        </template>
                                        <template v-else>
                                            {{$tools.nullToString(scope.row[item.fieldName])}}
                                        </template>
                                    </template>
                                    <template v-else>
                                        <template v-if="isTextTooLong(scope.column,scope.row[item.fieldName],item.width)">
                                            <el-popover
                                                placement="left"
                                                popper-class="el-popover_tableFilter"
                                                trigger="hover">
                                                <div class="content" :style="{'max-width':showOverPopover.width + 'px','max-height':showOverPopover.maxHeight + 'px'}">
                                                    {{$tools.nullToString(scope.row[item.fieldName])}}
                                                </div>
                                                <span slot="reference">{{$tools.nullToString(scope.row[item.fieldName])}}</span>
                                            </el-popover>
                                        </template>
                                        <template v-else>
                                            {{$tools.nullToString(scope.row[item.fieldName])}}
                                        </template>
                                    </template>
                                </div>
                                <template v-else>
                                    {{$tools.nullToString(scope.row[item.fieldName])}}
                                </template>
                            </template>
                        </template>
                </el-table-column>
                <!-- 操作列 -->
                <el-table-column 
                    label="操作"
                    class="h_operator" 
                    :width="option.operateWidth?option.operateWidth:'180'"
                    v-if="option.hasOperateColumn"  
                    :fixed="option.operatesFixed">
                        <template slot-scope="scope">
                            <div class="oprator" v-if="option.buttonType === 'icon'">
                                <!-- hidden这个属性加上会隐藏此栏目-->
                                <i 
                                    v-for="btn in operates" 
                                    class="btn-slot"
                                    v-hide="btn.ishide?btn.ishide:''" 
                                    :key="btn.id" 
                                    @click="btn.handleClick(scope.row, $event,scope.$index)" 
                                    :title="btn.title" size="mini"  
                                    :class="[btn.css]" 
                                    :type="btn.type" 
                                    :round="btn.round || false" 
                                    :icon="btn.icon || ''">
                                </i>
                            </div>
                            <div class="oprator" v-else>
                                <i 
                                    v-for="btn in operates" 
                                    class="btn-span"
                                    v-hide="btn.ishide?btn.ishide:''" 
                                    :key="btn.id" 
                                    @click="btn.handleClick(scope.row, $event,scope.$index)" 
                                    :title="btn.title">{{btn.text}}
                                </i>
                            </div>
                        </template>
                </el-table-column>
                <template slot="empty">
                    <i class="icon-wushuju iconfont btn-icon notext"></i>
                    <div class="notext">暂无数据</div>
                </template>
            </el-table>
            <div class="page">
                <el-pagination 
                    layout="total, sizes, prev, pager, next, jumper"
                    v-if="option.hasPagination" 
                    :pager-count="5"
                    @size-change="handleSizeChange" 
                    @current-change="handleCurrentChange" 
                    :current-page="tableData.currentPage" 
                    :page-sizes="[10, 30, 50, 100]" 
                    :page-size="tableData.pageSize"  
                    :total="tableData.total">
                </el-pagination>
            </div>
    </div>
</template>

<script>
export default {
    name:'tableFilter',
    props: {
        showIndex: {
            //是否显示序号
            type: Boolean,
            default: false
        },
        isAllDisabled: {
            //是否禁用所有
            type: Boolean,
            default: false
        },
        onlycheck: {
            //多选还是单选
            type: Boolean,
            default: false
        },
        isHideTableBtn: {
            //是否显示表格上方的高级搜索和选择字段
            type: Boolean,
            default: false
        },
        minWidth: {
            //单元格最小宽度
            type: Number,
            default: 150
        },
        disabledTableData: {
            //表格数据及其基础配置
            type: Array,
            default: () => []
        },
        tableData: {
            //表格数据及其基础配置
            type: Object,
            default: () => { }
        },
        headers: {
            //表头
            type: Array,
            default: () => []
        },
        loadRemoteData: {
            type: Function,
            default: function () { }
        },
        filterTabKey: {
            type: Object,
            default: () => {
                return {};
            }
        },
        showOverflowTooltip: {
            //是否超出隐藏
            type: Boolean,
            default: false
        },
        showOverPopover: {//超出隐藏新功能
            type: Object,
            default: ()=>({
                isOpen:false,
                width:500,
                maxHeight:360
            })
        },
        highlightCurrentrow: {
            //高亮当前行
            type: Boolean,
            default: true
        },
        defaultExpandAll: {
            //是否默认展开所有行
            type: Boolean,
            default: false
        },
        expandRowKeys: {
            //展开行集合
            type: Array,
            default: () => []
        },
        option: {
            type: Object,
            default: () => {
                return {
                    selectable: false, //全选
                    isBorder: true, //带边框
                    sortable:true,
                    hasOperateColumn: true, //操作列
                    tableHeight: "360", //表格高度
                    buttonType: "icon", //操作按钮类型，icon为图标
                    hasPagination: true, //分页
                    operatesFixed: false, //操作列固定位置，参照elment-ui，false,true, left, right,默认false，不固定操作列位置
                    operateWidth:'180',
                    operates: [] //操作按钮配置
                };
            }
        }
    },
    data() {
        return {
            tableKey: 0, //这个key是为了重新渲染table组件而设定，vue语法里有说明，只要key改变，组件会重新渲染
            isShowFilte: true, //是否显示表头搜索功能
            currentPage: 1,
            pageSize: 10,
            checkedHeaders: [], //选中的表头集合
            allowChoiceHeaders: [], //
            filteContent: [], //总的过滤条件
            tableHeaders: [],
            sortOrder: "descending", //排序
            multipleSelectionAll: [], //所有选中的数据
            getRowKeys(row) {
                //row-key
                return row.id ? row.id : row._id;
            }
        };
    },
    watch: {
        headers: {
            //监听原始表头值变化
            handler: function () {
                let _headers = this.headers?this.headers:[];
                let _tableHeaders = _headers.filter(
                    item => item.ishide == false
                ); //过滤出来显示的表头
                this.tableHeaders = _tableHeaders;
                this.checkedHeaders = []; //清除选中的表头数据
                _tableHeaders.forEach((val, index) => {
                    this.checkedHeaders.push(val.fieldName);
                });
            },
            immediate: true
        },
        "tableData.content": {
            handler: function (val) {
                this.$refs.hyTable.setCurrentRow(); //不得已而为之，使用了row-key 导致存在当前行后操作列表会无缘无故的给列表第一条数据添加current-row类名，所以这里监听到数据变化就清空current-row
            }
        }
    },
    computed: {
        operates() {
            return this.option.operates.filter(v => v.isHide != true);
        }
    },
    mounted() {
        //南京银行那边需要搜索默认展开
        if(this.isHideTableBtn){
            this.isShowFilte = false
        }
    },
    methods: {
        //拖拽表头事件
        headerDragend(newWidth, oldWidth, column, event){
            this.tableHeaders.forEach
            for(let item of this.tableHeaders){
                if(item.fieldName == column.property){
                    this.$set(item,'width',newWidth)
                    this.$set(item,'dragended',true)
                    break
                }
            }
        },
        //判断字段是否超出表头宽度
        isTextTooLong({realWidth},name){
            return realWidth < this.getTextWidth(name) + 10
        },
        //获取单元格字段宽度
        getTextWidth(str){
            var width = 0;
            var html = document.createElement('span');
            html.innerText = str;
            html.className = 'getTextWidth';
            document.querySelector('body').appendChild(html);
            width = document.querySelector('.getTextWidth').offsetWidth;
            if(isIE()||isIE11()) {
                document.querySelector('.getTextWidth').removeNode(this);
            }else {
                document.querySelector('.getTextWidth').remove();
            }
            function isIE(){
                if(!!window.ActiveXObject || "ActiveXObject" in window){
                    return true;
                }else{
                    return false;
                }
            }
            function isIE11(){
                if((/Trident\/7\./).test(navigator.userAgent)){
                    return true;
                }else{
                    return false;
                }
            }
            return width;
        },
        tableRowClass(row) {
            if (row.row.class) {
                //如果行数据带有class这个属性，则对此行数据加上class
                return row.row.class;
            }
        },
        rowClick(row) { //行单击事件
            this.$emit("row-click", row);
        },
        rowDblclick(row) {   //行双击事件
            this.$emit("row-dblclick", row);
        },
        cellClick(row, column, cell, event) {//单元格单击事件
            this.$emit("cell-click", row, column, cell, event);
        },
        cellDblclick(row, column, cell, event) {//单元格双击事件
            this.$emit("cell-dblclick", row, column, cell, event);
        },
        expandChange(row, row_supplement) {
            //行双击事件,展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded
            this.$emit("expand-change", row, row_supplement);
        },
        selectAll(selection) {
            this.$emit("select-all", selection);
        },
        selectable(row, index) {
            //判断是否可以勾选
            let _disabledTableData = this.disabledTableData;
            if (this.isAllDisabled) {
                return;//禁用所有checkbox
            }
            if (_disabledTableData.some(el => {return el._id === row._id})) {
                return false;
            } else {
                return true;
            }
        },
        //此方法不得已为之，现在好像没提供这个功能，展开后表格高度不会出现滚动条，所以才想到这个下三滥的方法
        load(tree, treeNode, resolve) {
            this.option.tableHeight += 0.1;
            resolve([]);
        },
        clearAll() {
            this.$refs.hyTable.clearSelection()
        },
        //选中功能，注意此功能结合 row-key,也就是说数据结构里必须带有id号，参考上面data()里的getRowKeys
        handleSelectionChange(rows) {
            if (this.onlycheck) {
                //单选情况
                if (rows.length > 1) {
                    let _arr = Array.from(rows);
                    this.$refs.hyTable.clearSelection();
                    this.$refs.hyTable.toggleRowSelection(rows.pop());
                    this.multipleSelectionAll = _arr;
                } else {
                    this.multipleSelectionAll = [...rows];
                }
                return;
            }
            this.multipleSelectionAll = [];
            if (rows) {
                rows.forEach(row => {
                    if (row) this.multipleSelectionAll.push(row);
                });
            }
            //下边的方法是扩展，特殊情况下需要使用，一般情况下，直接使用上面方法足够
            this.$emit("selection-change", rows);
        },
        //高级搜索
        advancedSearch() {
            this.isShowFilte = !this.isShowFilte;
            this.option.tableHeight += 0.001; //防止表头显示隐藏后高度问题，重新渲染后就可以解决此问题
            // this.tableKey++  //防止表头显示隐藏后高度问题，重新渲染后就可以解决此问题
            let _filteContent = this.filteContent;
            if (_filteContent.length >= 1) {
                this.filteContent = []; //清空过滤条件
                if (!this.isShowFilte)
                    this.loadRemoteData([], 1, this.tableData.pageSize);
            }
        },
        //选中的表头变化
        changeSelectedHeader(selectedTable) {
            let _headers = this.headers;
            let _curHeaders = []; //每次表头变化就重新获取header
            _headers.forEach((val, index) => {
                //这里需要注意下，之所以先循环总的表头数据是为了让新的表头按照最初的顺序排列
                selectedTable.forEach((item, i) => {
                    if (item == val.fieldName) {
                        _curHeaders.push(val);
                    }
                });
            });
            this.tableHeaders = _curHeaders;
        },
        //分页大小调整，这里需要说明下，当调整分页大小后我们默认从第一页调用数据，
        handleSizeChange(pageSize) {
            this.tableData.pageSize = pageSize;
            this.loadRemoteData(this.filteContent, 1, pageSize);
        },
        //当前页调整
        handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
            this.loadRemoteData(this.filteContent, currentPage, this.tableData.pageSize);
        },
        //表头input类型值发生变化后触发的函数（如果值没变不会触发）
        headerInputChange(val) {
            this.loadRemoteData(this.filteContent, 1, this.tableData.pageSize);
        },
        //select类型值改变监听事件
        selectChange(val,property) {
            if(this.isShowFilte){
                this.setFilte(val, "select",property);
                this.loadRemoteData(this.filteContent, 1, this.tableData.pageSize);
            }else{
                let _remoteSelect = this.$refs.hyTable.$refs.tableHeader.$refs
                for(let item of Object.keys(_remoteSelect)){
                    if(item.includes('remoteSelect')){
                        _remoteSelect[item].clearRadioValue()
                    }
                }
            }
        },
        //获取远程select下拉搜索值
        getSelectOptios(currentPage,text,property,type){//type为0是focus函数，1是翻页
            let [ _headers, _filterTabKey, _currentPage, _id ] = [ this.headers, this.filterTabKey, 1 ]
            for(let i=0,y=_headers.length;i<y;i++){
                if(_headers[i].fieldName == property){
                    _id = _headers[i].datasource.source._id
                }
            }
            let _current = _filterTabKey[property].current
            let _page = 1
            if(type==0){
                _page = _current?_current:1
            }else{
                _page = currentPage?currentPage:1
            }
            _fetch({
                url: `cmdb/dataSourceApi/previewTablePageById/${_id}`,
                type: 'post',
                data: {"param":[{"key":"cit_maintenance_show_name_value","operation":"lk","value":text.name?text.name:''}],"current":_page,"size":10}
            }).then(res => {
                if (res.data.status) {
                    let _body = res.data.body
                    this.$set(this.filterTabKey,property,{
                        content:_body.options,
                        total: _body.total,
                        param:[{"key":"cit_maintenance_show_name_value","operation":"lk","value":text.name?text.name:''}],
                        id:_id,
                        current: _body.current
                    })
                }
            })
        },
        //过滤条件函数
        setFilte(val, type, property) {
            let flag = false;
            let _filteContent = this.filteContent; //过滤条件集合
            _filteContent.forEach((item, index) => {
                if (item.t_tab_key == property) {
                    if (val && val != "-1") {
                        //有值的情况,页面里设置了全部的值为-1，也是需要清除的
                        item.t_tab_value = val;
                    } else {
                        _filteContent.splice(index, 1); //如果清空了当前选项，那么删除过滤条件数组中对应的空值
                    }
                    flag = true;
                }
            });
            if (!flag && val != "-1") {
                _filteContent.push({
                    t_tab_key: property,
                    t_tab_value: val,
                    t_tab_flag: type
                });
            }
        },
        //render表头函数
        renderHeader(h, { column, $index }) {
            let that = this;
            let options = []; //当前select类型下的下拉值
            let _headers = this.headers;
            let _filteContent = this.filteContent; //过滤条件集合
            let _property = column.property; //当前表头prop属性值
            let filteType = ""; //当前绑定值类型
            let filteValue = ""; //当前绑定值
            let isDisabled = false //表头搜索是否禁用
            let isSelectRemote = '0' //是否是下拉远程搜索，默认0
            let dateType = {
                type:"datetimerange",
                formate:"yyyy-MM-dd HH:mm:ss"
            } //是否格式化时间，默认是datetimerange带有时分秒，若为daterange,不显示时分秒
            //获取select类型下的下拉值
            for (let item in this.filterTabKey) {
                if (item == column.property) {
                    options = this.filterTabKey[item];
                }
            }
            for (let item of _filteContent) {
                if (item.t_tab_key == column.property) {
                    filteValue = item.t_tab_value;
                }
            }
            for (let item of _headers) {
                if (item.fieldName == _property) {
                    filteType = item.type;
                    isDisabled = item.isDisabled
                    if(item.type == 'date' && item.params && item.params.formatDate ){
                        dateType = {
                            type:"daterange",
                            formate:"yyyy-MM-dd"
                        }
                    }
                    if(item.datasource){
                        let _source = item.datasource.source ;
                        if( _source && _source.cmdbparams && _source.cmdbparams.ispage && _source.cmdbparams.ispage == '1' ){
                            isSelectRemote = '1'//是下拉远程搜索，
                        }
                    }
                    break
                }
            }
            //input值改变监听事件
            const inputChange = val => {
                this.setFilte(val, "input",column.property);
            };
            //date时间值改变监听事件
            const dateChange = val => {
                this.setFilte(val, "date",column.property);
                this.loadRemoteData(this.filteContent, 1, this.tableData.pageSize);
            };
            let [ _inputTypes, _selectTypes, _timeTypes ] = [
                ["singletext", "mulittext", "richText", "image", "numeric", "attachment", "table", "cascade", "password", "json", "array", "groupline"],
                ["select", "radio", "checkbox" ], 
                ["date"]] 
            if ( _inputTypes.includes(filteType) ) { //文本框类型
                return (
                    <span>
                        <span class="headerName" title={column.label}>
                            {column.label}
                        </span>
                        <span class="headerVal">
                            <el-input
                                value={filteValue}
                                class="h_input"
                                size="mini"
                                disabled={isDisabled}
                                on-change={this.headerInputChange}
                                on-input={inputChange}
                                clearable
                                placeholder="请输入"
                            ></el-input>
                        </span>
                    </span>
                );
            } else if ( _timeTypes.includes(filteType) ) { //时间日期类型
                return (
                    <span>
                        <span class="headerName" title={column.label}>
                            {column.label}
                        </span>
                        <span class="headerVal">
                            <el-date-picker
                                value={filteValue}
                                size="mini"
                                on-input={dateChange}
                                disabled={isDisabled}
                                value-format={dateType.formate}
                                type={dateType.type}
                                placeholder="请选择时间"
                                range-separator="-"
                                start-placeholder=""
                            ></el-date-picker>
                        </span>
                    </span>
                );
            } else if ( _selectTypes.includes(filteType) && isSelectRemote==='0' ) {   //下拉框普通类型
                return (
                    <span>
                        <span class="headerName" title={column.label}>
                            {column.label}
                        </span>
                        <span class="headerVal">
                            <el-select
                                value={filteValue}
                                size="mini"
                                filterable
                                disabled={isDisabled}
                                placeholder="请选择"
                                clearable
                                on-change={(val)=>{return that.selectChange(val,column.property)}}
                            >
                                {options.map((item, index) => {
                                    return (
                                        <el-option
                                            key={index}
                                            value={item.value}
                                            label={item.label}
                                        >
                                            {item.label}
                                        </el-option>
                                    );
                                })}
                            </el-select>
                        </span>
                    </span>
                );
            }else if ( _selectTypes.includes(filteType) && isSelectRemote === '1' ) {   //下拉框远程搜索类型
                return (
                    <span>
                        <span class="headerName" title={column.label}>
                           {column.label}
                        </span>
                        <span class="headerVal">
                            <selectUser 
                               size="mini"
                               ref={"remoteSelect"+column.property}
                               value={filteValue}
                               on-focus = {(val,text)=>{ return that.getSelectOptios(val,text,column.property,0)}}
                               on-loadData={(val,text)=>{ return that.getSelectOptios(val,text,column.property,1)}}
                               page_pulldown_data={that.filterTabKey[column.property]}
                               label='name' 
                               val='fieldName'
                               on-input = {(val)=>{return that.selectChange(val,column.property)}}
                            >
                            </selectUser>
                        </span>
                    </span>
                );
            } else {
                //不是input，date, select的全部转换成默认的input类型
                return (
                    <span>
                        <span class="headerName" title={column.label}>
                            {column.label}
                        </span>
                        <span class="headerVal">
                            <el-input
                                value={filteValue}
                                class="h_input"
                                on-blur={this.headerInputChange}
                                on-input={inputChange}
                                clearable
                                placeholder="请输入"
                            ></el-input>
                        </span>
                    </span>
                );
            }
        },
        setActiveTableForSelf(e) {
            e && e.stopPropagation();
        }
    }
};
</script>
<style lang="scss">
.selectFieldName .el-checkbox-group .el-checkbox__label {
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100px;
    position: relative;
    top: -1px;
}
.selectFieldName .el-checkbox-group .el-checkbox {
    margin: 0 20px 0 0;
}
.hyTable {
    position: relative;
    .tableFunBox {
        position: absolute;
        right: 0;
        top: 0;
    }
    .el-loading-mask {
        .el-icon-loading {
            font-size: 36px;
        }
        .el-loading-text {
            font-size: 12px;
        }
    }
    .pointer {
        cursor: pointer;
    }
    .popoverBox {
        margin: 10px 0;
        .tableFunSearch {
            cursor: pointer;
        }
    }
    .el-table th div {
        display: block;
        line-height: 1;
        white-space: nowrap;
        font-size: 12px;
        font-weight: bold;
        color: rgba(144, 147, 153, 1);

    }
    .el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
    .el-table__body tr.current-row > td,
    .el-table__body tr.hover-row > td {
        background: rgba(229, 246, 253, 1);
        color: #606266;
    }
    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background: #f2fafe !important;
        color: #606266;
    }

    .el-table th div.el-input {
        overflow: visible;
    }
    .el-table__empty-text {
        font-size: 12px;
        color: #999;
        line-height: 1;
        padding: 24px 0 12px;
        .icon-wushuju {
            font-size: 36px !important;
        }
    }
    .notext {
        line-height: 24px;
        margin-top: 8px;
    }
    .el-table th.gutter {
        background: rgba(245, 247, 250, 1);
    }
    .el-table--small th {
        padding: 3px 0;
    }
    .hy-el-table {
        border: 1px solid #e5e5e5;
        &::before {
            bottom: -1px;
        }
        .headerName{
            display: block;
            padding: 10px 0;
        }
        .headerVal {
            font-size: 12px;
            display: block;
            height: 28px;
            overflow: hidden;
            padding-bottom: 5px;
            .el-input {
                padding: 0;
            }
            .el-select {
                padding: 0;
            }
            .el-input__inner {
                font-size: 12px;
                color: #999;
                width:100%;
                box-sizing: border-box;
                border: 1px solid #e5e5e5;
                .el-input__icon{
                    width:8%;
                }
            }
            .el-date-editor .el-range-input{
                width: 35%;
            }
        }
        .oprator i {
            cursor: pointer;
            color: red;
            &.icon-delete {
                color: #f56c6c;
            }
        }
        .btn-slot {
            font-size: 12px;
            display: inline-block;
            margin: 3px;
            width: 16px;
            height: 16px;
        }
        .btn-span{
            margin-right: 10px;
        }
        .caret-wrapper {
            position: relative;
        }
    }
    .hy-border-el-table {
        // border-right:0;
        .has-gutter {
            th {
                border-right: 1px solid #ddd;
            }
        }
    }
    .hy-el-table-searchValHide {
        .headerVal {
            display: none;
        }
    }
    .page {
        text-align: right;
        margin: 10px 0;
    }
    
}
.handTable {
    .el-table__body-wrapper {
        cursor: pointer;
    }
}
.mmmCalculationTableHeight {
    margin: 0 16px;
    height: 100%;

    .el-table {
        height: calc(100% - 95px) !important;

        .el-table__body-wrapper {
            height: calc(100% - 40px);
            overflow-y: auto;

            .el-table__empty-block {
                box-sizing: border-box;
                min-height: 0;
            }
        }
    }
}
.el-popover_tableFilter{
    .content{
        overflow-y: auto;
    }
}
</style>
