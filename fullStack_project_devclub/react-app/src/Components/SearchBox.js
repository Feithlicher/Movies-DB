import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
    return (
        <div className="inputDiv">
            <span className="enterSpan">Enter a movie name:</span>
            <input className="enterSpan"></input>
        </div>
    );
};

export default SearchBox;