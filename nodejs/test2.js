const EventEmitter = require('events').EventEmitter
// 任何构造函数都可以继承 EventEmitter 的方法 on emit
class Dog extends EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}
var simon = new Dog('simon')
simon.on('bark', function() {
    console.log(this.name, ' barked')
})
setInterval(()=> {
    simon.emit('bark')
},500)