/*
 * @Description: 
 * @Author: 黄越
 * @Date: 2020-07-13 18:23:16
 * @LastEditors: 黄越
 * @LastEditTime: 2020-08-06 14:09:37
 */ 
module.exports =  {
  '/cdproject': {
    target: 'http://127.0.0.1:8096/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/cdproject': '/'
    }
  },
  '/pack': {
    target: 'http://127.0.0.1:8099/', //容器
    changeOrigin: true,
    pathRewrite: {
      '^/pack': '/'
    }
  },
  '/ciview': {
    target: 'http://127.0.0.1:8091/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/ciview': '/'
    }
  },
  '/maintenanceproject': {
    target: 'http://127.0.0.1:8096/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/maintenanceproject': '/'
    }
  },
  '/codeview': {
    target: 'http://127.0.0.1:8899/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/codeview': '/'
    }
  },
  '/pipelineview': {
    target: 'http://127.0.0.1:8090/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/pipelineview': '/'
    }
  },
  // cicd 视图
  '/cicd': {
    target: 'http://127.0.0.1:8090/', //设置调用接口域名和端口号别忘了加http
    changeOrigin: true,
    pathRewrite: {
      '^/cicd': '/' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
      // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
    }
  },
  '/proview': {
    target: 'http://127.0.0.1:8091/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/proview': '/'
    }
  },

  // cicd api
  '/SCiCdApi/*': {
    target: 'http://192.168.2.108:18000/',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/SCiCdApi": ""
    }
  },

  // ====================================================================
  //CD项目
  '/cdapi': {
    // target: 'http://192.168.1.167:18099/', 
    target: 'http://192.168.2.108:7004/cd-server',
    // target: 'http:/192.168.1.167:18099/', 
    changeOrigin: true,
    pathRewrite: {
      '^/cdapi': '/'
    }
  },
  //CD获取domain与system
  '/cddominapi': {
    target: 'http://192.168.1.203:8080/',
    changeOrigin: true,
    pathRewrite: {
      '^/cddominapi': '/'
    }
  },
  // cd 视图  这里的名称应与子项目build/config/的viewRootPath一致
  '/cdview': {
    target: 'http://127.0.0.1:8090/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/cdview': '/'
    }
  },

  // 马明明---项目管控
  '/controlview': {
    target: 'http://127.0.0.1:8099/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/controlview': '/'
    }
  },
  '/controlApi': {
    target: 'http://192.168.2.108:7004/ci-server-new',
    changeOrigin: true,
    pathRewrite: {
      '^/controlApi': '/'
    }
  },

  '/qz-authority/*': {
    target: 'http://192.168.2.108:7004/qz-authority',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/qz-authority": ""
    }
  },
  '/qz-usercenter/*': {
    // target: 'http://192.168.2.108:7004/qz-usercenter',
    target: ' http://192.168.2.108:7001/',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/qz-usercenter": ""
    }
  },
  // 鲁晶晶---注册  && 国际化
  '/user/*': {
    target: 'http://192.168.2.108:7004/ci-server-new',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/user": ""
    }
  },
  // 徐海华-----工作台
  '/job/*': {
    // target: 'http://192.168.1.167:7004/qz-ci-server',
    target: 'http://192.168.2.108:7004/qz-ci-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/job": ""
    }
  },
  // ch
  '/ci_job/*': {
    target: 'http://192.168.2.108:7004/system-project-server',
    // target: 'http://192.168.1.134:18003',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/ci_job": ""
    }
  },
  // 脚本管理 ouyang//139
  // '/script/*': {
  //     target: 'http://192.168.1.167:9065',
  //     logLevel: "debug",
  //     changeOrigin: true,
  //     pathRewrite: {
  //         "^/script": ""
  //     }
  // },
  // 心跳服务
  '/qz-registration/*': {
    target: 'http://192.168.2.108:7004/qz-registration',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/qz-registration": ""
    }
  },
  // 高效运维平台
  '/ops-script-repertory/*': {
    target: 'http://192.168.2.108:7004/ops-script-repertory', //测试环境地址
    // target: 'http://192.168.0.74:9065', 
    changeOrigin: true,
    pathRewrite: {
      '^/ops-script-repertory': ''
    }
  },
  // 高效运维平台
  '/ops-flowdesigen/*': {
    target: 'http://192.168.2.108:7004/quickops-flowdesigen', //测试环境地址
    // target: 'http://192.168.0.74:10211',
    changeOrigin: true,
    pathRewrite: {
      '^/ops-flowdesigen': ''
    }
  },
  //日志检索
  '/qz-elasticsearch/*': {
    target: 'http://192.168.2.108:7004/qz-elasticsearch',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/qz-elasticsearch": ""
    }
  },
  // 类别管理 zhugen
  '/script/*': {
    target: 'http://192.168.2.108:7004/ops-script-repertory',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/script": ""
    }
  },
  // 类型属性 ouyang && ljj
  '/cmdb/*': {
    target: 'http://192.168.2.108:7004/ops-cmdb',
    // target: 'http://192.168.2.108:7004/ops-cmdb',
    // target: 'http://192.168.2.108:7004/ops-cmdb88',
    // target: 'http://192.168.0.135:9066',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/cmdb": ""
    }
  },
  // 类型属性内部使用的
  '/innercmdb/*': {
    target: 'http://192.168.2.108:7004/ops-data-model',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/innercmdb": ""
    }
  },
  // 任务组件测试用
  '/task_component/*': {
    target: 'http://192.168.2.108:7004/qz-activiti-platform',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/task_component": ""
    }
  },
  // 公共参数接口
  '/common_parameter/*': {
    target: 'http://192.168.2.108:9066',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/common_parameter": ""
    }
  },
  // ops-cmdbtest-dkl  
  '/test/*': {
    // target: 'http://192.168.2.108:7004/ops-cmdbtest-dkl',
    target: '192.168.1.96:10201',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/test": ""
    }
  },
  // 管控变更
  // //     target: 'http://192.168.1.167:7004/ops-version-manage',
  '/ops-version-manage/*': {
    target: 'http://192.168.2.108:7004/zuul/ops-version-manage',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/ops-version-manage": ""
    }
  },
  '/mediaKit': {
    target: 'http://127.0.0.1:8092/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/mediaKit': '/'
    }
  },
  '/media/*': {
    target: 'http://192.168.2.108:7004/qz-media-package',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/media": "/"
    }
  },
  '/task/*': {
    // target: 'http://192.168.2.108:10086/',
    target: 'http://192.168.2.108:7004/container-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/task": ""
    }
  },
  '/release/*': {
    target: 'http://192.168.2.108:7004/release-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/release": ""
    }
  },
  '/processDesign/*': { //test
    target: 'http://192.168.2.108:7004/qz-activiti-platform',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/processDesign": ""
    }
  },
  '/Ma/*': {
    target: 'http://192.168.2.108:7004/ops-data-model',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/Ma": ""
    }
  },
  '/unit/*': { //单元测试
    target: 'http://192.168.2.108:18003/',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/unit": "/unit"
    }
  },
  //编译构建
  '/compile/*': {
    target: 'http://192.168.2.108:10101/',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/compile": ""
    }
  },
  '/qz-gateway/*': {
    target: 'http://192.168.2.108:7004/',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/qz-gateway": ""
    }
  },
  //编译构建
  '/jenkins/*': {
    target: 'http:/192.168.2.108:9188/',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/jenkins": ""
    }
  },
  //部署实例
  '/cd-server/*': {
    target: 'http://192.168.2.108:7004/cd-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/cd-server": ""
    }
  },
  //synapplication
  '/synapplication/*': {
    target: 'http://192.168.2.108:7004/ops-synapplication',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/synapplication": ""
    }
  },

  '/deliveryview': {
    target: 'http://127.0.0.1:8090/', //本地localhost
    changeOrigin: true,
    pathRewrite: {
      '^/deliveryview': '/'
    }
  },
  '/delivery/*': {
    target: 'http://192.168.2.108:7004/qz-activiti-platform-cicd',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/delivery": ""
    }
  },
  '/source-code-server/*': {
    // target: 'http://192.168.1.137:18005',
    target: 'http://192.168.2.108:7004/source-code-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/source-code-server": ""
    }
  },
  //容器部署
  '/container-server/*': {
    target: 'http://192.168.2.108:7004/container-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/container-server": ""
    }
  },
  // 介质包下载
  '/Download/*': {
    target: 'http://192.168.2.108:7004/media-download-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/Download": ""
    }
  },
  // 介质包上传
  '/Upload/*': {
    target: 'http://192.168.2.108:7004/media-upload-server',
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/Upload": ""
    }
  },
 
}