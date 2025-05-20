// import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import { useState } from "react";
// const MovieList = lazy(() => import('./pages/movieList/movieList') );
// const Movie = lazy(() => import('./pages/movie/movie') );
import Movie from "./pages/movie/movie";
import MovieList from "./pages/movieList/movieList";
function App() {
  const DEFAULT_SEARCH = '';
  const [search, setSearch] = useState(DEFAULT_SEARCH);
  const [movieList, setMovieList] = useState([])
  const moviesFiltered = movieList.filter(
    movie =>
      movie.title.toLowerCase().includes(search.trim().toLowerCase()))
    ;

  return (
    <div className="App page_wrapper">
        <Router>
            <Header search={search} setSearch={setSearch} />
            <Routes>
         
                <Route index element={<Home />}></Route>
               
                <Route 
                  path="movie/:id" 
                  element={<Movie />}></Route>
                <Route 
                  path="movies/:type"
                  element={<MovieList  
                  movieList={movieList} 
                  setMovieList={setMovieList}  
                  moviesFiltered={moviesFiltered}/>}></Route>
                <Route 
                  path="/*" 
                  element={<h1>Error Page</h1>}>
                </Route>
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
