import _http from "./http"
import service from "./service"
import storage from "./localstorage"
import {formatString} from "./formatString"
import {routerGo} from "./routerGo"
import {clone} from "./clone"
import * as tools from "./tools"
// import * as storage from "./storage"
// import * as validate from "./validate"

const utils = {
  _http,
  service,
  storage,
  formatString,
  routerGo,
  clone,
  ...tools
}

export default utils;