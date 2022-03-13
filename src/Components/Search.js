import React from "react" ; 
import "./Search.css"
import { AiOutlineSearch } from "react-icons/ai";
import "./Slider.css" ; 

export const Search = () => {
    return (
        <div className="searchContainer container">
            <div className="searchBox ">
                <input className="searchTxt" type="text" placeholder="Search..."/>
            </div>

            <div className="searchIcon">
                <AiOutlineSearch className="icon" />
            </div>
        </div>

    )
}