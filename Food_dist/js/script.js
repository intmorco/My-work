const open_btns = document.querySelectorAll('[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')


open_btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('show')
    }
})

// carousel
const slides = document.querySelectorAll('.offer__slide')
const next = document.querySelector('.offer__slider-next')
const prev = document.querySelector('.offer__slider-prev')
const current = document.querySelector('#current')
const total = document.querySelector('#total')
let slideIndex = 0


function slideNumber(number) {
    return number < 10 ? `0${number}` : number
}

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach((slide) => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    current.innerHTML = slideNumber(slideIndex + 1)
    total.innerHTML = slideNumber(slides.length)
}

showSlides()

next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

// tabcontents
const tabcontents = document.querySelectorAll('.tabcontent')
const tabheader__items = document.querySelectorAll('.tabheader__item')

showTabs(0)

function showTabs(idx) {
    tabcontents.forEach(el => el.classList.add('hide', 'fade'))
    tabcontents[idx].classList.remove('hide')
}

tabheader__items.forEach((btn, idx) => {
    btn.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')

        showTabs(idx);
    }
})


// timer





const deadline_for_sales = "2024-06-12 21:04"
const deadline_for_event_ends = "2025-06-08 19:31:20"

function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);


    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTimer(endTime, selector) {
    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        interval = setInterval(updateTimer, 1000);

    function updateTimer() {
        const t = getRemainingTime(endTime)


        if(t.t <= 0)  {
            clearInterval(interval)
            seconds.innerHTML = 0
            days.innerHTML = 0
            hours.innerHTML = 0
            minutes.innerHTML = 0

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            return
        }
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
    }
}



setTimer(deadline_for_sales, '.second-timer')
setTimer(deadline_for_event_ends, '.first-timer')


const gender_btns = document.querySelectorAll('#gender .calculating__choose-item')
const cardio_inps = document.querySelectorAll('.calculating__choose_medium input')
const act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const res_view = document.querySelector('#res_view')

const user_data = {
    gender: "woman"
}

gender_btns.forEach(btn => {
    btn.onclick = () =>{
        user_data.gender = btn.getAttribute('data-gender')
        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})

cardio_inps.forEach(inp => {
    inp.onkeyup = (e) =>{
        user_data[inp.id]= inp.value
    }
})

act_btns.forEach(btn => {
    btn.onclick = () =>{
        const act = +btn.getAttribute('data-act')
        act_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let result = 0
        
        if(user_data.gender === 'woman'){
            result = 655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)
        } else{
            result = 66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_data.age)

        }

        result = result * act

        res_view.innerHTML = Math.floor(result)
    }
})


const all_inps = document.querySelectorAll('input')
const patterns = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    number: /^\d+$/
}

all_inps.forEach(inp => {
    inp.onkeyup = (event) =>{
        const val = event.target.value

        patterns[inp.name].lastIndex = 0
        if(patterns[inp.name].test(val)) {
            inp.classList.remove('error')
        } else {
            inp.classList.add('error')

        }
    }
})   

console.log(all_inps)