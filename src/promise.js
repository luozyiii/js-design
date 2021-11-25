import StateMachine from 'javascript-state-machine'

// 初始化状态机模型
let fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transitions: [
    { 
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    { 
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    },
  ],
  methods: {
    // 监听 resolve
    onResolve: function(state, data) {
      // state - 当前状态机实例； data - fsm.resolve(xxx) 传递的参数
      // console.log(state, data)
      data.successList.forEach(fn => fn())
    },
    // 监听 reject
    onReject: function(state, data) {
      // state - 当前状态机实例； data - fsm.reject(xxx) 传递的参数
      data.successList.failList(fn => fn())
    },
  }
})

// 定义 Promise
class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []

    let that = this

    fn(function (){
      // resolve 函数
      fsm.resolve(that)
    }, function () {
      // reject 函数
      fsm.reject(that)
    })
  }

  then(succesFn, failFn) {
    this.successList.push(succesFn)
    this.failList.push(failFn)
  }
}

// 测试代码
function loadImg(src) {
  const promise = new MyPromise(function(resolve, reject){
    let img = document.createElement('img')
    img.onload = function (){
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}

let src = 'https://p26-passport.byteacctimg.com/img/user-avatar/4d0a1fbdc3d957f62ecde912c80082b0~300x300.image'
let result = loadImg(src);

result.then(function() {
  console.log('ok1')
}, function() {
  console.log('fail1')
})
result.then(function() {
  console.log('ok2')
}, function() {
  console.log('fail2')
})