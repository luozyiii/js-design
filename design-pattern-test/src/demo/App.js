import $ from 'jquery'
import ShoppingCar from './ShoppingCart/ShoppingCart'
import List from './List/List'

export default class App {
    constructor(id) {
        this.$el = $('#' + id)
    }

    // 初始化购物车
    initShoppingCart() {
        let shoppingCart = new ShoppingCar(this)
        shoppingCart.init()
    }

    // 初始化列表
    initList() {
        let list = new List(this)
        list.init()
    }

    init() {
        this.initShoppingCart()
        this.initList()
    }
}