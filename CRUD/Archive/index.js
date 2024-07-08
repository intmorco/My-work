// form onsubmit
import { reload } from "./lib/utils.js";
import { User } from "./components/User.js";
import { todos } from "./lib/db.js";

const tbody = document.querySelector('table tbody')
const form = document.querySelector('.form')


form.onsubmit = (e) => {
    e.preventDefault()

    let current_year = new Date().getFullYear()
    let user_age = new FormData(e.target).get('age')
    let user_name = new FormData(e.target).get('name')
    let user_year = current_year - user_age
    
    const todo = {
        name: user_name ,
        year: user_year ,
    }
    
    todos.push(todo)
    reload(todos, User, tbody);
    
    console.log(todo)
    
}

reload(todos, User, tbody);

