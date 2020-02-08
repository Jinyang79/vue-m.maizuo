export function dateFilter (timestamp) {
  function zero (time) {
    return time < 10 ? '0' + time : time
  }
  var date = new Date(Number(timestamp) * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = zero(date.getDate()) + ' '
  // let h = zero(date.getHours()) + ':'
  // let m = zero(date.getMinutes()) + ':'
  // let s = zero(date.getSeconds())
  // return Y + M + D + h + m + s
  return Y + M + D
};
