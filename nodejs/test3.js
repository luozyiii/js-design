// Stream 用到了自定义事件
var fs = require('fs')
var readStream = fs.createReadStream('./data/file1.txt')
var length = 0
readStream.on('data', function(chunk) {
    length += chunk.toString().length
})
readStream.on('end', function() {
    console.log(length)
})