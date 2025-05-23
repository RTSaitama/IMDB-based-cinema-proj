import React, {useEffect, useState} from "react"
 
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = ({moviesFiltered, movieList, setMovieList}) => {
    


    // роут парамс
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])
    // другий запит
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        console.log(movieList)
    }

    return (
        <div className="movie
        _list">
            <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    moviesFiltered.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList