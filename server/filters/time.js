import Cookies from 'js-cookie'
import moment from 'moment'


// moment.locale(['zh', 'en'].includes(Cookies.get('language')) ? Cookies.get('language') : 'zh_cn')

// YMDHMS时间转换过滤器 YYYY MMM Do a h:mm:ss
export const toYMD = date => {
  if (!date) { return date }
  date = new Date(date)
  moment.locale(['zh', 'en'].includes(Cookies.get('language')) ? Cookies.get('language') == 'zh' ? 'zh_cn' : Cookies.get('language') : 'zh_cn')
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
  // return moment(date).format('LLL')
}
