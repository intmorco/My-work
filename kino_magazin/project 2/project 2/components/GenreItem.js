import { movies } from "../js/db.js"
import { reload, setMovie } from "../js/utils.js"
import { MovieItem } from "./MovieItem.js"

export function GenreItem(genre) {
    const li = document.createElement('li')
    const a = document.createElement('a')

    if(genre === "All") {
        a.classList.add('promo__menu-item_active')
    }

    a.href = "#"
    a.classList.add('promo__menu-item')
    a.innerHTML = genre

    li.append(a)


    li.onclick = () => {
        const ul = document.querySelector('.promo__interactive-list')
        const prev = document.querySelector('.promo__menu-item_active')
        prev.classList.remove('promo__menu-item_active')

        a.classList.add('promo__menu-item_active')

        
        if(genre === "All") {
            setMovie(movies[0])
            reload(movies, MovieItem, ul)
            return
        }
        
        let filtered = movies.filter(movie => {
            if(movie.Genre === genre) {
                return movie
            }
        })
        
        
        setMovie(filtered[0])
        reload(filtered, MovieItem, ul)
    }

    return li
}