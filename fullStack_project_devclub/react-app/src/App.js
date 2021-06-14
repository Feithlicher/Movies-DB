import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./Components/Movies";
import MoviesHeading from "./Components/MoviesHeading";
import SearchBox from "./Components/SearchBox";
import Football from "./Components/Football";
import Example from "./Components/Example";
// import AddToFavorites from "./Components/AddToFavorites";

const API_KEY = "598d1c39"; // to OMDB
// const API_KEY = "338d9da5ffde4fe6044c0fd2c82d4457"; // to TMDB

const App = () => {
    const [movie, setMovie] = useState({title: "hey"});
    
    return (
        <div>
            <div className='first'>
                <MoviesHeading />
                <SearchBox setMovie = { setMovie } />
                {/* <Football /> */}
                {/* <Example /> */}
                {/* <button onClick={myFunc}>button</button> */}
            </div>
            <Movies movieUrl={movie.Poster}/>
            {/* <img src={movie.Poster}/> */}
        </div>
    )
};

export default App;
