import { setMovie } from "../js/utils.js"

export function MovieItem(item) {
    const li = document.createElement('li')
    const del = document.createElement('div')

    li.classList.add('promo__interactive-item')
    del.classList.add('delete')

    li.innerHTML = item.Title


    li.append(del)

    li.onclick = () => {
        setMovie(item)
    }

    return li
}