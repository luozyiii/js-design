// 明星
let star = {
    name: '迪丽热巴',
    age: 20,
    phone: 'star：188250xxxxx'
}

// 经纪人
let agent = new Proxy(star, {
    get: function(target, key) {
        if(key === 'phone') {
            // 返回经纪人自己的电话
            return 'agent：1888xxxxxx'
        }
        if(key === 'price') {
            // 明星不报价，经纪人报价
            return 120000
        }
        return target[key]
    },
    set: function(target, key, val) {
        if(key === 'customPrice') {
            if(val < 100000) {
                // 最低10w
                throw new Error('价格太低')
            }else {
                target[key] = val
                return true
            }
        }
    }
})

// test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 110000
console.log('agent.customPrice', agent.customPrice)