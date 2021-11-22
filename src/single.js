class SingleObject {
  login() {
    console.log('login...')
  }
}
SingleObject.getInstance = (function(){
  let instance;
  return function() {
    if(!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

// 测试：注意这里只能使用静态函数 getInstance, 不能 new SingleObject(); js 只能自己约束
const obj1 = SingleObject.getInstance()
obj1.login()
const obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2) // 两者必须完全相等