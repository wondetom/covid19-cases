import React from "react";

const searchBox = ({placeholder, handleChange}) => {
    return (
        <input type='search' 
        className="search" 
        placeholder={placeholder}
        onChange={handleChange}
        />
    )
}

export default searchBox