import React, { useState } from "react"
// import Comments from "./Comments";
import Slider from "react-slick"

import "slick-carousel/slick/slick-theme.css";

function Customer() {
    const [isActive, setIsActive] = useState(0)

    const toggleActive = (index) => {
        setIsActive(index)
    }

    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      cssEase: 'ease-out',
      variableWidth: true,
      dots: true,
      responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
            }
          },
          {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
            }
          }
        ],
        beforeChange(index, newIndex) {
          setIsActive(newIndex);
        },
    };

        const comments = [
        {
            "data": "01 Year With Us",
            "name": "Alexander R.",
            "image": "/img/customer_foto.jpg",
            "text": "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
            "id": "1"
          },
        {
            "data": "01 Day With Us",
            "name": "Sarina.Hagenes",
            "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/549.jpg",
            "text": "perferendis libero cum",
            "id": "2"
          },
          {
            "data": "03 Month With Us",
            "name": "Kurt.Reinger",
            "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/780.jpg",
            "text": "porro minima impedit",
            "id": "3"
          }
    ]

    return (        
            <div className="customer">
                <div className="container">
                    <div className="customer__row">
                        <h2 className="customer__title">Customer <span>Say</span></h2>
                        <div className="customer__card">
                                <ul className="customer__slider">
                                <div className="customer__list">  
                                <Slider {...settings}>
                                {comments.map((comment, index) => 
                                            <li key={index} className={isActive === index ? "customer__item active" : "customer__item"}>
                                                <div className={isActive === index ? "customer__item_top active" : "customer__item_top"}>
                                                    <img src={comment.image} className="customer__item_img"/>
                                                    <div className="customer__item_col">
                                                        <div className="customer__item_name">{comment.name}</div>
                                                        <div className="customer__item_date">{comment.data}</div>                                            
                                                    </div>
                                                    <div className="customer__item_decor"><img src="/img/decor6.png" alt="decor"/></div>
                                                </div>
                                                <div className="customer__item_row">    
                                                    <div className={isActive === index ? "customer__item_text-active" : "customer__item_text"}>{comment.text}</div>
                                                    <div className="customer__item_rating">
                                                        <img src="/img/stars.svg" alt="star"/> 
                                                        <img src="/img/stars.svg" alt="star"/>
                                                        <img src="/img/stars.svg" alt="star"/>
                                                        <img src="/img/stars.svg" alt="star"/>
                                                        <img src="/img/stars.svg" alt="star"/>
                                                    </div>
                                                </div>
                                            </li>
                                            )
                                        }
                                </Slider>        
                                </div>                                           
                                        
                                </ul>     
                            
                        </div>
                    </div>
                </div>
            </div>
        
    )
  }
  
  export default Customer