import request from '../utils/request';
/**
 * 获取用户数据
 * @param current
 * @param size
 * @param param
 * 
 */
export function getUserList(current, size, ascs,descs,param) {
  return request({
    url: '/qz-usercenter/user/page',
    method: 'post',
    data: {
      current,
      size,
      ascs,
      descs,
      param
    }
  });
}
/**
 * 获取角色数据
 * 
 */
export function getProjectRoleMap() {
  return request({
    url: '/qz-usercenter/resource/getProjectRoleMap',
    method: 'post'
  });
}

/**
 * 添加
 * @param username
 * @param nickname
 * @param email
 * @param ids
 * @returns {*}
 */
export function addUser(sectionId,username,nickname,email,mobile,rids,status,id) {
  return request({
    url: '/qz-usercenter/user/add',
    method: 'post',
    data: {
      sectionId,
      username,
      nickname,
      email,
      mobile,
      rids,
      id,
      status
    }
  });
}

/**
 * 删除
 * @param ids
 * @returns {*}
 */
export function delUser(ids) {
  return request({
    url: '/qz-usercenter/user/del',
    method: 'post',
    data: ids
  });
}

/**
 * 编辑
 * @param id
 * @returns {*}
 */
export function editUser(id) {
  return request({
    url: '/qz-usercenter/user/'+id,
    method: 'post',
    params: {
      id
    }
  });
}

/**
 * 禁用启用
 * @param id
 * @returns {*}
 */
export function disableUser(id,status) {
  return request({
    url: '/qz-usercenter/user/disable',
    method: 'post',
    data: {
      id,
      status
    }
  });
}

/**
 * 重置密码
 * @param id
 * @returns {*}
 */
export function resetPwd(id) {
  return request({
    url: '/qz-usercenter/user/resetPwd',
    method: 'post',
    data: {id:id[0]}
  });
}

/**
 * 角色信息
 * @param username
 * @returns {*}
 */
//POST /user/getRelateProjectRoleByUserName/{username}
export function roleMsg(username) {
  return request({
    // url: '/qz-usercenter/user/getRelateProjectRoleByUserName/'+username+'/',
    url: '/qz-usercenter/role/allRoleList',
    method: 'post',
  });
}

/**
 * 导入excel
 * 
 * 
 */
export function fileUpload(file) {
  return request({
    url: "/qz-usercenter/user/fileUpload",
    method: "post",
    headers: {
      'Content-Type': 'multipart/form-data' // clientId:clientSecret => base64
    },
    data: file
  });
}
/**
 * 模板下载
 * 
 * 
 */
export function templateExport() {
  return request({
    url: "/qz-usercenter/user/userRegisterTemplateExport",
    method: "get",
    responseType: 'blob',
    data: {}
  });
}