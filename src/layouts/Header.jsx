import { useState } from "react"
import { Link } from "react-router-dom"
import CartWidget from "../layouts/CartWidget"
import LikeWidget from "../layouts/LikeWidget"

function Header() {
    const [isOpen, setIsOpen] = useState(true)  
    const [isActive, setIsActive] = useState(true)

    const closeMenu = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">                    
                    <nav className="header__nav">
                        <Link to="/" className="header__logo">
                            <img src="../img/Logo.svg" alt="Logo"/>
                        </Link> 

                        <ul className={`header__menu ${isOpen ? " " : "active"}`}>
                            <li className="menu__item">
                                <Link to="/menu" className="menu__link" onClick={closeMenu}>Menu</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/blog" className="menu__link" onClick={closeMenu}>Blog</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/aboutUs" className="menu__link" onClick={closeMenu}>About Us</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/contact" className="menu__link" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>                    
                    </nav>                    
                    
                    <div className="header__button">
                    <Link to="/menuFavourites/" className="btn btn--like">
                        <svg width="34px" height="30px" viewBox="0 -0.5 1025 1025" version="1.1" fill="#6C5FBC" stroke="#6C5FBC">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <path d="M512.8 977.4c-26.1 0-50.1-7.3-71.5-21.7C323.5 897 0 675.3 0 400.5 0 212 153.4 58.6 341.9 58.6c60.5 0 119 15.8 170.9 45.9 51.9-30.1 110.5-45.9 170.9-45.9 188.5 0 341.9 153.4 341.9 341.9 0 274.8-323.5 496.6-441.3 555.2-21.4 14.4-45.4 21.7-71.5 21.7zM341.9 144.1c-141.4 0-256.4 115-256.4 256.4 0 117.2 80.6 225.2 148.2 295.1 86.1 89 187.5 155.2 248.1 184.8l6.1 3.7c15.1 10.8 34.6 10.8 49.7 0l6.1-3.7C604.4 850.7 705.8 784.6 791.8 695.6c67.6-69.9 148.2-177.8 148.2-295.1 0-141.4-115-256.4-256.4-256.4-52.6 0-103.2 16-146.5 46.1L512.8 207.3l-24.5-17.1c-43.2-30.2-93.9-46.1-146.4-46.1z" fill="#6C5FBC"/>
                            </g>
                        </svg>                           
                    </Link>  
                    <LikeWidget />
                    <Link to="/cart" className="btn btn--shop">
                        <svg width="34" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>                           
                    </Link>
                    <CartWidget />
                    </div>

                    <button className={`header__burger ${isActive ? " " : "active"}`} onClick={() => {setIsOpen(!isOpen); setIsActive(!isActive)}}>
                        <span></span>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Header