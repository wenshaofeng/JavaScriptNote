Function.prototype.myCall = function (context) {
/*   1 校验调用call的是否是函数
  2 设置默认上下文为全局上下文 */

  if (typeof this !== 'function') {
    throw new TypeError('is not a function!')
  }

  context = context || window || global
  // step1: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
  context.func = this

  const args = [...arguments].slice(1)
  // step2: 执行函数
  const result = context.func(...args)
  // step3: 删除 step1 中挂到目标对象上的函数，把目标对象”完璧归赵”
  delete context.func

  return result 
}

var me = {
  name: 'zhangsan'
}

function showName(doing) {
  console.log(`${this.name} is ${doing}`)
}


showName.myCall(me,'eating') // zhangsan is eating 
