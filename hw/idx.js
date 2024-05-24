const box_two = document.querySelector('.box_two')
const box_three = document.querySelector('.box_three')
const reset = document.querySelector('.reset')
const counter = document.querySelector('.counter')
const rdm = document.querySelector('.rdm')

let num = 0
const maxNum = 10
const minNum = -10



box_two.onclick = () => {
    if(num > minNum) {
        num--
        counter.innerHTML = num
    }

}
box_three.onclick = () => {
    if(num < maxNum) {
        num++
        counter.innerHTML = num
    }

}
rdm.onclick = () =>{
    num = Math.round(Math.random() * 100)
    counter.innerHTML = num
}
reset.onclick = () =>{
    if (counter.innerHTML = num){
        num = 0
        counter.innerHTML = num
    }
}
console.log(counter)

