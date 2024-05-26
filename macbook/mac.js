const btn_white = document.querySelector('.btn_white')
const btn_gray = document.querySelector('.btn_gray')
const img = document.querySelector('.img')


btn_white.onclick = () =>{
    if(btn_white.classList.contains('active')){
        btn_gray.classList.add('passive')
        img.classList.add('img_white')
    } else{
        
        btn_white.classList.remove('passive')
        btn_white.classList.add('active')

        btn_gray.classList.remove('active')
        btn_gray.classList.add('passive')

    }
}
btn_gray.onclick = () =>{
    if(btn_gray.classList.contains('passive')){
        
        btn_gray.classList.remove('passive')
        btn_gray.classList.add('active')
        
        btn_white.classList.remove('active')
        btn_white.classList.add('passive')
    } else{
        img.classList.add('img_gray')
        
        btn_white.classList.add('passive')

    }
}
