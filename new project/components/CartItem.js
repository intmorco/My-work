function CartItem(item) {
    let quantity = 1
    total_price += item.price

    const main_div = document.createElement('div')   
    const left = document.createElement('div')   
    const right = document.createElement('div')   
    const img = document.createElement('img')   
    const col = document.createElement('div')   
    const title = document.createElement('span')   
    const counter = document.createElement('div')   
    const plus = document.createElement('button')   
    const minus = document.createElement('button')   
    const amount = document.createElement('input')   
    const price = document.createElement('span')   
    const remove_btn = document.createElement('button')   

    // class
    main_div.classList.add('item')
    left.classList.add('left')
    right.classList.add('right')
    col.classList.add('col')
    counter.classList.add('counter')
    // text
    plus.innerHTML = "+"
    minus.innerHTML = "-"
    remove_btn.innerHTML = "remove"
    title.innerHTML = item.title
    price.innerHTML = item.price

    // attr
    img.src = item.image
    img.alt = item.title
    amount.type = "number"
    amount.value = quantity

    main_div.append(left, right)
    left.append(img, col)
    col.append(title, counter)
    counter.append(minus, amount, plus)
    right.append(price, remove_btn)

    amount.oninput = (e) =>{
        const val = e.target.value

        if(val > item.rating.count || val < 0){
            setTimeout(() => {
                amount.value = 1
                alert('Error')
            }, 400);
        }
        quantity = val
        updatePrice()
    }
    plus.onclick = () => {
        if(quantity < item.rating.count){
            quantity++
            amount.value = quantity
            updatePrice()
            updateTotalPrice(true)
            return
        }
        alert('no more left, so go home')
    }
    
    minus.onclick = () => {
        if(quantity > 1 ){
            quantity--
            amount.value = quantity
            updateTotalPrice(false)
            updatePrice()

        }

    }

    function updatePrice(){
        price.innerHTML = (item.price * quantity).toFixed(2)
    }
    function updateTotalPrice(isPlus){
       
        if(isPlus){            
            total_price += item.price

        } else{
            
            total_price -= item.price
        }
        total_price_view.innerHTML = total_price.toFixed(2)

    }

    remove_btn.onclick = () => {
        const total_cart = document.querySelector('#total_cart')
        
        const div = document.querySelector(`#selector_${item.id}`)
        const btn = div.querySelector('button')

        btn.classList.remove('active-btn')
        btn.innerHTML = "В избранное"

        const idx = cart.indexOf(item)
        cart.splice(idx, 1)
        main_div.remove()

        total_cart.innerHTML = cart.length
         

    }
    return main_div 
}