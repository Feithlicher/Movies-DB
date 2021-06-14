import React, { useState, useEffect } from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
    
    const [letter, getLetter] = useState(null);
    
    function handleChange(e) {
        const API_KEY = "598d1c39";
        console.log(e.target.value);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${e.target.value}`)
        .then((response) => response.json())
        // .then((data) => console.log("this is the data: ", data));
        .then((data) => props.setMovie(data))
        


    }
    
    return (
        <div className="inputDiv">
            <span className="enterSpan">Enter a movie name:</span>
            <input onChange={handleChange} className="enterSpan"></input>
        </div>
    );
};

export default SearchBox;