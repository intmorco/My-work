function Item(item) {
    // a 
    const mens_clothes = document.createElement('div')
    const bag = document.createElement('div')
    const bag_img = document.createElement('img')
    const clothing = document.createElement('div')
    const men_clothing = document.createElement('div')
    const perfect = document.createElement('div')
    const prices = document.createElement('div')
    const price = document.createElement('div')
    const img_dollar = document.createElement('img')
    const span_dollar = document.createElement('span')
    const img_star = document.createElement('img')
    const span_star = document.createElement('span')
    const img_box = document.createElement('img')
    const span_box = document.createElement('span')
    const button = document.createElement('button')

    // b 
    mens_clothes.classList.add('mens_clothes')
    bag.classList.add('bag')
    bag_img.src = item.image
    bag_img.alt = item.title
    clothing.classList.add('clothing')
    men_clothing.classList.add('men_clothing')
    men_clothing.innerText = item.title
    perfect.classList.add('perfect')
    perfect.innerHTML = item.description.length >= 90 ? item.description.slice(0, 90) + "...<b>read more</b>" : item.description
    prices.classList.add('prices')
    price.classList.add('price')
    img_dollar.src = "./img/1.png"
    img_dollar.alt = "dollar"
    span_dollar.innerText = item.price
    img_star.src = "./img/2.png"
    img_star.alt = "star"
    span_star.innerText = item.rating.rate
    img_box.src = "./img/3.png"
    img_box.alt = "box"
    span_box.innerText = item.rating.count
    button.innerText = "В избранное"

    // c
    mens_clothes.append(bag, clothing)
    bag.append(bag_img)
    clothing.append(men_clothing, perfect, prices, button)
    prices.append(price)
    price.append(img_dollar, span_dollar, img_star, span_star, img_box, span_box)

    return mens_clothes
}