import React, { useState } from "react"
import SearchContext from "./Search"
import CategoryFilter from "./CategoryFilter"
function Getsupersale( {products, setFilteredProducts} ) {
    
    const [isActive, setIsActive] = useState(0)
    
    const toggleActive = (index) => {
        setIsActive(index)
    }
    
    const slider = [
        {
            title: "GET 50%",
            promo: "WEEKEND",
            image: "/src/assets/img/Food-2.png"
        },
        {
            title: "GET 30%",
            promo: "TODAY",
            image: "./img/Food-3.png"           
        },
        {
            title: "GET 20%",
            promo: "MONTH",
            image: "./img/Food-1.png"           
        },
    ]

    const control = [
        {}, {}, {}
    ]

    return (
        <div className="supersale">
            <div className="container"> 
                <div className="supersale__row">
                    <div className="supersale__promo">
                        <img className="supersale__promo_decor" src="/src/assets/img/decor7.svg" alt="decor"/>
                        <ul className="supersale__slider">
                            <div className="supersale__list">
                                {slider.map((slide, index) =>  
                                    <li key={index} className={isActive === index ? "supersale__slider_item active" : "supersale__slider_item"}>
                                        <div className="supersale__slider_title">{slide.title}</div>
                                        <div className="supersale__slider_promo">{slide.promo}</div>
                                        <img className="supersale__slider_img" src={slide.image}/>
                                    </li>
                                    )
                                }    
                            </div>           
                        </ul>

                        <ul className="supersale__line"> {control.map((item, index) => 
                            <li key={index} className={isActive === index ? "supersale__line_item-active" : "supersale__line_item"} onClick={() => toggleActive(index)} ></li> 
                        )}
                        </ul>
                        <SearchContext products={products} setFilteredProducts={setFilteredProducts} />
                    </div>
                    <CategoryFilter products={products} setFilteredProducts={setFilteredProducts} />
                </div>    
            </div>
        </div>

    )
  }
  
  export default Getsupersale