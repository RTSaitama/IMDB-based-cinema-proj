// import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
// const MovieList = lazy(() => import('./pages/movieList/movieList') );
// const Movie = lazy(() => import('./pages/movie/movie') );
 import Movie from "./pages/movie/movie";
import MovieList from "./pages/movieList/movieList";
function App() {
  return (
    <div className="App page_wrapper">
        <Router>
          <Header />
            <Routes>
         
                <Route index element={<Home />}></Route>
               
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
