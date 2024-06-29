const place = document.querySelector('.container')
const sorted = arr.toSorted((a,b) => a.price - b.price)
const all_btn = document.querySelector('.show_all')
const five_btn = document.querySelector('.show_five')
const first_five = sorted.slice(0 , 5)

for (let item of sorted) {
    const component = Item(item)

    five_btn.onclick = () => {
        
    }

    

   
    place.append(component)
    
    // console.log(component)
}
console.log(first_five)


