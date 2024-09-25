import React, { useState } from "react"
import { createContext,useContext } from "react"
import { MainContext } from "../layouts/Main";

const SearchContext = createContext();

const Search = ({ products, setFilteredProducts}) => {

    const handleSearch = (elem) => {
        const query = elem.target.value
        const filteredProduct = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredProducts(filteredProduct)
    }


    return (
            <div className="search">
                <input 
                type="text"
                onChange={handleSearch}
                placeholder="Search" 
                />

                <button className="btn btn--search"> <img src="/img/Search.svg" alt="search"/></button>
            </div>
    )
  }

  
  export default Search