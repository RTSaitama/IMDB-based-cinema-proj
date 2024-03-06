import React, { useEffect, useState } from "react"
 
 
 
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// Import Swiper styles
import 'swiper/css';

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        // isLoading
        // ?
        // <div className="poster">
        //         <SkeletonTheme color="#a5a4a4" >
        //         <Skeleton height={1000} duration={1} />
        //     </SkeletonTheme>
        // </div>
        // :
        <>
            <div className="poster">
                <Swiper
                centeredSlides={true}
                    showThumbs={false}
                    autoPlay={true}
                    autoplay={{
                        delay: 50,
                        disableOnInteraction: false
                    }}
                    transitionTime={3}
                
                    loop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                   <Link style={{ color:"white"}} to={`/movie/${movie.id}`} >
                    {/* свайпер хіро */}
                             <SwiperSlide>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage_overlay">
                                    <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage_runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage_rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                                </div>
                                </SwiperSlide>
                            </Link>
                           
                        ))
                    }
                </Swiper>
                <MovieList />
            </div>
        </>
    )
}

export default Home