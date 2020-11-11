import request from '../utils/request';

/**
 * 登陆
 * @param username
 * @param password
 * @returns {*}
 */
export function login (username, password,force) {
    // var grant_type = 'password';
    // var scope = 'webapp';
    return request({
        // url: '/qz-authority/oauth/token',
        url: '/qz-gateway/qz-auth/oauth/token',
        method: 'post',
        headers: {
            'Authorization': 'Basic cXo6c2hxejg4NjYu' ,// clientId:clientSecret => base64
        },
        // params: { username, password,force, grant_type, scope }
        params: { username, password,force}
    });
}

/**
 * 地址栏输入令牌登陆
 * @param access_token
 * @returns {*}
 */
export function byTokenlogin (token) {
    return request({
        url: '/qz-authority/oauth/check_token',
        method: 'post',
        headers: {
            'Authorization': 'Basic cXo6c2hxejg4NjYu' // clientId:clientSecret => base64
        },
        params: {
            token
        }
    });
}

/**
 * 获取用户信息
 * @returns {*}
 */
export function getInfo () {
    const types = localStorage.getItem('showMenus') || '2'
    console.log(types)
    return request({
        url: `/qz-usercenter/resource/getMenu?topid=${types}`,
        // url: `/qz-usercenter/resource/getMenu`,
        method: 'post'
    });
}
/**
 * 菜单列表
 * @returns {*}
 */
// export function getAllResource () {
//     return request({
//         url: '/uc/resource/all',
//         method: 'get'
//     });
// }

/**
 * 修改密码
 * @param oldPassword
 * @param newPassword
 * @returns {*}
 */
export function updatePassword (oldPassword, newPassword) {
    return request({
        url: '/qz-usercenter/user/updatePwd',
        method: 'put',
        params: { oldPassword, newPassword }
    });
}

/**
 * 登出
 * @param accessToken
 * @param refreshToken
 * @returns {*}
 */
export function logout (accessToken, refreshToken) {
    return request({
        // url: '/qz-authority/removeToken',
        url: '/qz-gateway/qz-auth/removeToken',
        method: 'get',
        params: { 
            // accessToken, refreshToken
        }
    });
}

/**
 * 获取用户信息 
 * @param accessToken
 * @returns {*}
 */
export function userInfo (access_token) {
    return request({
        url: '/qz-usercenter/user/userInfo',
        method: 'post',
        params: { access_token}
    });
}

/**
 * 修改密码
 * @param 
 * @returns {*}
 */
// POST /user/updatePwd
export function modifyPsd (oldPassword,newPassword){
    return request({
        url: '/qz-usercenter/user/updatePwd',
        method: 'post',
        data: { oldPassword,newPassword}
    });
}