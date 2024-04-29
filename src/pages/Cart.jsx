// import Header from "../laouts/Header"
// import Footer from "../laouts/Footer"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import GetSupersale from "../layouts/GetSupersale "
import PromoCode from "../layouts/PromoCode"

import { AppContext } from "../App";
import { MainContext } from "../layouts/Main";

function Cart() {
    const {cart, setCart} = useContext(AppContext)

    const data = useContext(MainContext);

    const [cartList, setCartList] = useState([]);

    const [total, setTotal] = useState(0)

    const [cartItems, setCartItems] = useState([])
    
    // const delivery = 2.99
    const delivery = parseFloat(2.99)

    useEffect (() => {
        const saveCart = localStorage.getItem('cart');
        if (saveCart) {
            const parsedCart = JSON.parse(saveCart);
            setCartItems(parsedCart)
        }
    }, [])

    const handleIncrement = (id) => {  
        const cartTmp = cartItems;
        const updateCartItem = cartTmp.map((item) => {
            if (item.id === id) { 
                return {
                    quantity : ++item.quantity
                }  
            }                   
        });            
        setCart([...cartTmp]);
        localStorage.setItem('cart', JSON.stringify(cartTmp));
    }

    const handleDecrement = (id) => {
        const cartTmp = cartItems;
        let updateCartItem = cartTmp.map((item) => {
            if (item.id === id && item.quantity > 0) {
            return item.quantity = --item.quantity;     
            }       
        });
        setCart([...cartTmp]);
        localStorage.setItem('cart', JSON.stringify(cartTmp));
    }

    // const handleIncrement = (id) => {  
    //     setCart((cart) => cart.map((item) => {
    //         if (item.id === id) {
    //             return {
    //                 ...cart,
    //                 quantity : quantity + 1
    //             }
    //         }
    //     return cart
    //     }))
    // // setCartItem(cartItem)
    // }
    //     const handleDecrement = (id) => {  
    //         // // let updateCart = [...cart]
    //         // const cartItem = cart.map((item) => {
    //         //     if (item.id === id) {
    //         //     return {
    //         //         ...cart,
    //         //         quantity : item.quantity - 1
    //         //     }
    //         // }
    //         // return cart
    //         // });
    //         // // setCartItem(cartItem)
    // }

    // работает только в инпуте
    
    const changeQuantity = (id, value) => {
        
        const cartItem = cart.find((item) => item.id == id)

        if (cartItem) {
            cartItem.quantity = +value;

            const cartTmp = cart;

            setCart([...cartTmp]);
            localStorage.setItem('cart', JSON.stringify(cartTmp));
        }
    }
    const [price, setPrice] = useState(total)

    const [discount, setDiscount] = useState(0);

    const applyCoupon = (PromoCode) => {
        if (PromoCode === "sale50") {
            setDiscount(50)
        }
    }
    
    useEffect(() => {
        const cartListTmp = data.filter((product) => {
            const cartItem = cart.find((item) => {
                product.quantity = item.quantity;
                return item.id == product.id;
            });

            if (cartItem) return product;
        });

        if (cartListTmp && cartListTmp.length > 0) setCartList([...cartListTmp])
    }, [cart])

    useEffect(() => {
        let totalTmp = 0;
        let priceTmp = 0
        cartList.forEach((item) => {
            totalTmp += item.price * item.quantity
        });
        totalTmp = totalTmp.toFixed(2);

        setTotal(totalTmp);

        priceTmp = +totalTmp + delivery
        priceTmp = priceTmp.toFixed(2);

        setPrice(priceTmp)

    }, [cartList])

    useEffect(() => {
        let discountPrice = total * (discount/100);
        discountPrice = discountPrice.toFixed(2)
        let price =  total - discountPrice + delivery;
        price = price.toFixed(2);

        setPrice(price);
    }, [discount, total])

    return (
        <>
        {/* <Header/>         */}
        <div className="shopping">
            <div className="container">
                <div className="shopping__row">
                    <img className="shopping__cards_decor-1" src="/src/img/decor8.svg" alt="decor"/>
                    <ul className="shopping__cards">
                    {cartList.map((item, index) => {
                            return (
                        <li key={index} className="shopping__item shopping__item_info">
                            <div className="shopping__item_info-1">
                                <img src={item.image} className="shopping__item_img" alt='dish'/>
                                <div className="shopping__item_img-info">
                                    <div className="shopping__item_subtitle"> {item.title}</div>
                                    <div className="shopping__item_price">$ {item.price}</div>
                                </div>
                            </div>
                            <div className="shopping__item_info-2">
                                <div className="shopping__item_counter">
                                    {/* <button className="shopping__item_counter-lower" type="button" onClick={handleDecrement}></button> */}
                                    <button className="shopping__item_counter-lower" type="button" onClick={() => handleDecrement(item.id)}></button>

                                    <input className="shopping__item_counter-count" type="number" max="9999" min="1" onChange={(event) => { changeQuantity(item.id, event.target.value, event.target) }} value={item.quantity}></input>
                                    {/* <button className="shopping__item_counter-raise" type="button" onClick={handleIncrement}></button> */}
                                    <button className="shopping__item_counter-raise" type="button" onClick={() => handleIncrement(item.id)}></button>

                                </div>
                                <div className="shopping__item_price shopping__item_price-total">$ {(item.price * item.quantity).toFixed(2)}</div>  

                                {/* <div className="shopping__item_price shopping__item_price-total">$ {(Math.floor(item.price) + Math.round(item.pricesub)/100)* item.quantity}</div>   */}
                            </div>
                        </li>
                        )
                        })}
                    </ul>
                    <div>
                        <PromoCode applyCoupon={applyCoupon}/>
                    </div>                   
                    
                    <div className="shopping__list">
                        <ul className="shopping__pay">
                            <li className="shopping__pay_item">
                                <div className="shopping__price_sub">Subtotal</div> 
                                <div className="shopping__price_sub">$ {total} </div>  
                            </li>
                            <li className="shopping__pay_item">
                                <div className="shopping__price_sub">Delivery</div>   
                                <div className="shopping__price_sub">$ {delivery}</div>
                            </li>
                            <li className="shopping__pay_item">
                                <div className="shopping__price_sub">Discount</div>   
                                <div className="shopping__price_sub">$ {(total * discount/100).toFixed(2)} </div>
                            </li>
                            <li className="shopping__pay_item">
                                <div className="shopping__price_total">Total</div> 
                                <div className="shopping__price_total">$ {price} </div>  
                            </li>
                        </ul>
                        <Link to="/popup"  className="btn btn--payment">Buy</Link>
                        <img className="shopping__cards_decor-2" src="/src/img/decor12.svg" alt="decor"/>
                        <img className="shopping__cards_decor-3" src="/src/img/decor12.svg" alt="decor"/>
                    </div>
                </div>
            </div>
        </div>
        <GetSupersale/>
        {/* <Footer/> */}
        </>
    )
}

export default Cart
