/**
 * Created by ben on 2017/7/21.
 */

// 返回给客户端的状态码
const ERRORCODE_SUCCESS = Symbol('Application#errorCode_success')
const ERRORCODE_FAIL = Symbol('Application#errorcode_fail')

module.exports = {

  get ERRORCODE_SUCCESS() {
    return 200
  },

  get ERRORCODE_FAIL() {
    return 500
  }
}

