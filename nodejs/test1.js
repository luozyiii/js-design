const EventEmitter = require('events').EventEmitter
const emitter1 = new EventEmitter()
emitter1.on('some', ()=> {
    // 监听 some 事件
    console.log('some event is occured 1')
})
emitter1.on('some', ()=> {
    // 监听 some 事件
    console.log('some event is occured 2')
})
emitter1.on('some1', (v)=> {
    // 监听 some1 事件
    console.log('some1 event is occured ', v)
})
emitter1.emit('some')
emitter1.emit('some1', 0) // 加参数