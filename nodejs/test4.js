// readline 用到了自定义事件
var readline = require('readline')
var fs = require('fs')
var rl = readline.createInterface({
    input: fs.createReadStream('./data/file1.txt')
})
var lineNum = 0
rl.on('line', function(line){
    // console.log(line)
    lineNum++
})
rl.on('close', function(){
    console.log('lineNum', lineNum)
})