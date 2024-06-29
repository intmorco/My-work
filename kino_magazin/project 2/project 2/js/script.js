import { GenreItem } from "../components/GenreItem.js";
import { MovieItem } from "../components/MovieItem.js";
import { genres, movies } from "./db.js";
import { reload, setMovie } from "./utils.js";

const ul = document.querySelector('.promo__interactive-list')
const ul_genres = document.querySelector('.promo__menu-list ul')
const search_inp = document.querySelector('#search')

search_inp.onkeyup = ({target}) => {
    const val = target.value.trim().toLowerCase()

    let filtered = movies.filter(movie => {
        const title = movie.Title.toLowerCase().trim()
        if(title.includes(val)) {
            return movie
        }
    })

    setMovie(filtered[0])
    reload(filtered, MovieItem, ul)

}


reload(movies, MovieItem, ul)
reload(genres, GenreItem, ul_genres)
