function Contact() {
    return (
        <>
        <div className="support">
            <div className="container">
                <div className="support__row">
                    <div className="support__row_left">
                        <h2 className="support__title">Just Contact</h2>
                        <img className="support__title_img-1" src="./img/decor9.svg" alt="decor"/>
                        <img className="support__title_img-2" src="./img/quality-bg.png" alt="quality"/>
                        <img className="support__title_img-4" src="./img/decor0.svg" alt="decor"/>
                    </div>
                    <form className="support__row_right">
                        <h2 className="support__title support__title_right">Customer <span>Support</span></h2>
                        <input type="text" placeholder="Full name" pattern="[A-Za-z]{3,}"/>
                        <input type="email" placeholder="Enter your email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+"/>
                        <textarea placeholder="Enter The Problem Or Query" minLength="4" required/>
                        <button className="btn btn--send">send now</button>
                        <svg className="support__title_img-3" width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M134.634 96.2273C118.109 108.707 98.5674 116.93 77.2539 113.074C58.0161 109.594 45.3471 95.7943 57.3077 77.0702C62.9694 68.2066 75.6072 61.4819 85.9981 65.7139C97.5745 70.4286 89.3074 84.5778 82.2506 88.9386C65.7687 99.1241 41.7457 96.2911 29.1759 79.183C14.2902 58.9231 37.2501 47.0166 37.2743 47.1868" stroke="#6C5FBC" strokeWidth="2.9437" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M132.042 119.151C131.316 116.979 131.568 114.746 131.705 112.504C132.153 105.144 134.989 97.3604 140.5 92.22C133.088 95.6409 122.311 97.5837 115.198 92.7865" stroke="#6C5FBC" strokeWidth="2.9437" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </form>
                </div>

</div>               
        </div>
        </>
    )
}

export default Contact