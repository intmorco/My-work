const box = document.querySelector('.box')
const prey = document.querySelector('.prey')
const container = document.querySelector('.container')
const body = document.body

let {x,y} = box.getBoundingClientRect()
let {x: XofPrey,y: YofPrey} = prey.getBoundingClientRect()




console.log(x,y)
console.log(XofPrey,YofPrey) 
document.onkeydown = (event) =>{
    
    let {top: up, bottom: down, right: r, left: l} = prey.getBoundingClientRect()
    console.log(up, down , l , r)

    let {top: upBox, bottom: downBox, right: rBox, left: lBox} = box.getBoundingClientRect()
    console.log(upBox, downBox , lBox , rBox)

    if(event.keyCode === 37){
        if(x > 10){
            box.style.left = (x -= 20) + "px"
        }
    }
    if(event.keyCode === 38){
        if(y > 10 ){
            box.style.top = (y -= 20) + "px"
        }
    }
    if(event.keyCode === 39){
        if(x < 1175){
            box.style.left = (x += 20) + "px"
        }
    }
    if(event.keyCode === 40){
        if(y < 575){
            box.style.top = (y += 20) + "px"
        }
    }
    
    if(lBox < l && r < rBox ){
        if(downBox > down && up > upBox){

            const XofPrey = Math.floor((Math.random()*1175))
            const YofPrey = Math.floor((Math.random()*575))
            
            const x = XofPrey
            const y = YofPrey   
                

            prey.style.left = x + "px"
            prey.style.top = y + "px"
        
            
            console.log(XofPrey,YofPrey)
        }
    }



    // console.log(event)

    // if(x == XofPrey  || y == YofPrey  ){
        
    //     const XofPrey = Math.floor((Math.random()*1175))
    //     const YofPrey = Math.floor((Math.random()*575))
    
    //     // const x = XofPrey
    //     // const y = YofPrey
    
    //     prey.style.left = XofPrey + "px"
    //     prey.style.top = YofPrey + "px"
        
    //     console.log(event)
            
            
    // }
    //     console.log(event.keyCode)
    //     console.log(event)
    //     console.log(x,y)
        
        
    // }
    

    // container.onclick = () => {
    
    //     const XofPrey = Math.floor((Math.random()*1175))
    //     const YofPrey = Math.floor((Math.random()*575))

    //     const x = XofPrey
    //     const y = YofPrey

    //     prey.style.left = x + "px"
    //     prey.style.top = y + "px"
    
    //     // console.log(event)
    //     console.log(XofPrey,YofPrey)
    // }


    // console.log(prey.getBoundingClientRect())
    // console.log(box.getBoundingClientRect())
}