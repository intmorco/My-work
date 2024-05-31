const showFile = () => {
    const photo = document.querySelector('img')
    const file = document.querySelector('input').files[0]
    const reader = new FileReader();
    
    
    reader.addEventListener('load' , ()=> {
      photo.src = reader.result;
    }, false)
  
    if(file){
      reader.readAsDataURL(file);
    }

    
}
 