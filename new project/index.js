const container = document.querySelector('.container')
const container_cart = document.querySelector('.scrollable-list')
const total_cart = document.querySelector('#total_cart')

const menu = document.querySelector('aside')
const menu_open_btn = document.querySelector('#menu')
const menu_close_btn = document.querySelector('#close')
const btn_one = document.querySelector('#one')
const btn_two = document.querySelector('#two')
const sorted = arr.toSorted((a, b) => a.price - b.price)
const total_price_view = document.querySelector('#total_price')


// тут идет отрисовка товаров на главной
reload(sorted, Item, container) 
// тут идет отрисовка выбранных товаров в менюшке
reload(cart, CartItem, container_cart)

btn_one.onclick = () => {
    reload(sorted)
}
btn_two.onclick = () => {
    reload(sorted.slice(0,5))
}
menu_open_btn.onclick = () => {
    menu.style.right = "0px"
}
menu_close_btn.onclick = () => {
    menu.style.right = "-100%"
}