import React, { useState } from 'react';
import { Link } from "react-router-dom"


function Sign() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [isValid, setIsValid] = useState(false);
      
        const handleSubmit = (e) => {
          e.preventDefault();

          const testEmail = /[^@\s]+@[^@\s]+\.[^@\s]+/;
          const testPhone = /^\+375\s?\(?(29|25|44|33|17)\)?\s?\d{3}-?\d{2}-?\d{2}$/g;

          if ((name && name.length > 2 ) && (email && testEmail.test(email)) && (phone && testPhone.test(phone))){
            setIsValid(true);
            setName('');
            setEmail('');
            setPhone('');                  
            
         } else {
             setIsValid(false);
         }
 }    


    return (
    <>
        <div className="popup">
            <div className="container">
                <div className="popup__row">
                    <div className="popup__left">
                        <div className="popup__left_logo">
                            <Link to="/" className="header__logo">
                                <img src="/img/Logo.svg" alt="Logo"/>
                            </Link>
                        </div>
                        <form className="popup__left_form">
                            <div className="popup__left_title">
                                Sign Up To eatly
                            </div>
                            <input type="text" placeholder="Full Name" value={name} pattern="[A-Za-z]{3,}"
                                onChange={(e) => setName(e.target.value)}
                                
                                />
                            <input type="email" placeholder="Email" value={email} pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                            <input type="tel" placeholder="+375" value={phone} pattern="^\+375\s?\(?(29|25|44|33|17)\)?\s?\d{3}-?\d{2}-?\d{2}$"
                                onChange={(e) => setPhone(e.target.value)} 
                                />
                            <button className="btn btn--confirm" onClick={handleSubmit}>confirm</button>
                              {(isValid && <div className='form__field_ok'>We will contact you as soon as possible</div>)}
                              
                        </form>
                    </div>
                    <div className="popup__right">
                        <div className="popup__right_title">
                            Find Foods With Love
                        </div>
                        <div className="popup__right_text">
                            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Sign