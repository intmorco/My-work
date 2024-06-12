const bgs = document.querySelectorAll('.color')
const left_btn = document.querySelector('.left')
const right_btn = document.querySelector('.right')

let bgIndex = 0


function showBG(n){
    if(n >= bgs.length){
        bgIndex = 0
    }
    if(n < 0){
        bgIndex = bgs.length - 1
    }
    bgs.forEach((img) => img.classList.add('hide'))
    bgs[bgIndex].classList.remove('hide')
}
showBG()
right_btn.onclick = () =>{
    bgIndex++
    showBG(bgIndex)
}
left_btn.onclick = () =>{
    bgIndex--
    showBG(bgIndex)
}

const tabheader_items = document.querySelectorAll('.tabheader_item')
showTabs(0)

function showTabs(idx) {
    bgs.forEach(el => el.classList.add('hide'))
    bgs[idx].classList.remove('hide')
}
tabheader_items.forEach((btn, idx) =>{
    btn.onclick = () =>{
        tabheader_items.forEach(el => el.classList.remove('tabheader_item_active'))
        btn.classList.add('tabheader_item_active')

        showTabs(idx)
    }
})