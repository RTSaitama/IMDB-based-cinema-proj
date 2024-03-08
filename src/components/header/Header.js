import React from "react"
 
import { Link } from "react-router-dom"
import Logo from "../logo/Logo"
const Header = () => {
    return (
        <div className="header">
            <div className="headerNav">
                <Link to="/"><Logo/></Link>
                <Link to="/movies/popular" ><span>Popular</span></Link>
                <Link to="/movies/top_rated" ><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" ><span>Upcoming</span></Link>
                {/* <Link to="/movies/upcoming" ><span>Upcoming</span></Link> */}
            </div>
        </div>
    )
}

export default Header