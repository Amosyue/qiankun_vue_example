//格式化数据
export function formatString(str) {
  return str ? str : (str === 0 || str === '0' ? '0' : '--')
}
