import React, {useEffect, useState} from "react"
 
import { useParams } from "react-router-dom"

const Movie  = async  () => {
    const [currentMovieDetail, setMovie] = useState()
    // має повернути ключ/значення, id з поточного URL-адреса ?
    const { id } = useParams()

    // скидує скрол коли дата прилітає
    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    // другий запит  на більш детальний опис
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return defer (
        <div className="movie">
            <div className="movie_intro">
                <img className="movie_back" 
                src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie_detail">
                <div className="movie_detailLeft">
                    <div className="movie_posterBox">
                        <img className="movie_poster" 
                        src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie_detailRight">
                    <div className="movie_detailRightTop">
                          <div className="movie_name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie_tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                         <div className="movie_rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            
                            {/* не оцінка, голоси за цю оцінку */}
                            <span className="movie_voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                         <div className="movie_runtime">{currentMovieDetail ? currentMovieDetail.runtime + " m" : ""}</div>
                                 <div className="movie_releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                         <div className="movie_genres">
                            {
                                // жанрові мітки
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie_detailRightBottom">
                        <div className="descText">Description</div>
                                <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie_links">
                <div className="movie_heading">Look more, follow link</div>
            
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie_imdbButton movie_Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            {/* <div className="movie__heading">Made_by</div>
               */}
        </div>
    )
}


export default Movie