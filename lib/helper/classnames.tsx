// 处理组件自身的className 和 用户传来的className 合并的问题
function classnames (...names: (string | undefined)[]) {
  // return names.filter(v => v).join(' ') 和下面的方法等价
  return names.filter(Boolean).join(' ')
}
export default classnames