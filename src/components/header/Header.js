import React from "react"
import { Link, useSearchParams } from "react-router-dom"

import Logo from "../logo/Logo"


const Header = ({ search, setSearch }) => {

  return (
    <div className="header">
      <div className="header__Nav">
        <Link to="/movies/top_rated"><Logo /></Link>
        <Link to="/movies/popular" ><span>Popular</span></Link>
        <Link to="/movies/top_rated" ><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" ><span>Upcoming</span></Link>
        {/* <Link to="/movies/upcoming" ><span>Upcoming</span></Link> */}
      </div>
      <div className="header__Search-bar">
        <div className="search_wrapp">
          <label className="search-label" htmlFor="search"></label>
          <input
            value={search}
            onChange={(e) => {
                console.log(e.target.value)
                setSearch(e.target.value)
              }}
            type="text"
            id="search"
            className="search-field"
            placeholder="let's watch something nice"
          />
        </div>
      </div>
    </div>
  )
}

export default Header