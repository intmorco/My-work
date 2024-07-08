export function User (item, idx, arr) {
    // <tr>
    //     <td>1</td>
    //     <td>Bruce Reyes</td>
    //     <td>1997</td>
    //     <td>
    //         <span class="edit"></span>
    //         <span class="delete"></span>
    //     </td>
    // </tr>
    // edit (openAndSaveChanges)
    // delete

    const tr = document.createElement('tr') 
    const td_number = document.createElement('td') 
    const td_name = document.createElement('td') 
    const td_year = document.createElement('td') 
    const td_action = document.createElement('td') 
    const span_edit  = document.createElement('span') 
    const span_delete = document.createElement('span') 

    td_number.innerHTML = idx + 1 
    td_name.innerHTML = item.name
    td_year.innerHTML = item.year

    span_edit.classList.add('edit')
    span_delete.classList.add('delete')

    tr.append(td_number, td_name, td_year, td_action)
    td_action.append(span_edit, span_delete)
    
    span_delete.onclick = () => {
        
        arr.splice(idx, 1)
        tr.remove()
    }

    const close_btn = document.querySelector('.close')
    const modal_window = document.querySelector('.modal')
    const save_btn = document.querySelector('.modal-content form button')

    const editName = document.querySelector('#editName')
    const editYear = document.querySelector('#editYear')
    

    span_edit.onclick = () => {
        editName.value = item.name
        editYear.value = item.year

        if(modal_window.style.display = 'none'){
            modal_window.style.display = 'block'
        }

        save_btn.onclick = (e) =>{
            e.preventDefault()

            let new_Name = new FormData(e.target).get('editName')
            let new_Age = new FormData(e.target).get('editYear')

            item.name = new_Name
            item.year = new_Age

            name.innerHTML = new_Name
            year.innerHTML = new_Age
               
                
            e.target.reset();
            modal_window.style.display = 'none'
        }

        close_btn.onclick = () =>{
            modal_window.style.display = 'none'
        }

            
        
        
    }

    console.log(span_edit, editName)

    return tr

}

// function openAndSaveChanges(item) {}