function loadImg(src) {
    let promise = new Promise(function(resolve, reject){
        let img = document.createElement('img');
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('图片加载失败')
        }
        img.src = src
    });
    return promise;
}

let src = 'https://p26-passport.byteacctimg.com/img/user-avatar/4d0a1fbdc3d957f62ecde912c80082b0~300x300.image'
let result = loadImg(src);

result.then(function(img){
    // part 1
    console.log(`width: ${img.width}`)
    return img
}).then(function(img){
    // part 2
    console.log(`height: ${img.height}`)
}).catch(function(err){
    console.log(err)
})