import React, { useState } from "react"

const dataQuestions = [
  {            
    "title": "How long does delivery take?",
    "question": "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan?",
    "id": "1"
  },
  {            
    "title": "How Does It Work?",
    "question": "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan?",
    "id": "2"
  },
  {            
    "title": "How does your food delivery service work?",
    "question": "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan?",
    "id": "3"
  },
  {            
    "title": "What payment options do you accept?",
    "question": "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan?",
    "id": "4"
  },
  {            
    "title": "Do you offer discounts or promotions?",
    "question": "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan?",
    "id": "5"
  },
]

function Questions() {
    
  const [isActive, setIsActive] = useState(false)
  const [disabled, setDisabled] = useState(false);

  
  const handleItemClick = (item) => {
      
    if (disabled) {
      setIsActive(item)
      console.log('enable')
    } else {
      setDisabled(!disabled)
      !setIsActive(item)
    }
  } 

    return (
      <div className="questions">
        <div className="container">
            <div className="questions__row">
                <div className="questions__header">
                    <h2 className="questions__header_title">Frequently Asked <br/><span>Questions</span></h2>
                    <img className='questions__header_decor' src="/img/decor8.svg" alt="decor"/>
                </div>

                <ul className="questions__list"> 
                  {dataQuestions.map((item) =>  
                    <li key={item.id} className="questions__item">
                        <div onClick={() => {handleItemClick(item)}} className={item === isActive ? "questions__item_questions" : "questions__item_questions active"}>
                            <div className="questions__item_title">{item.title}</div>
                            <div className={item === isActive ? "questions__item_question-active" : "questions__item_question"}onClick={() => {!handleItemClick()}}>{item.question}</div>
                          </div>
                        <div className={item === isActive ? "questions__item_button active" : "questions__item_button"} onClick={() => {!handleItemClick(), console.log('disable')}}>
                        </div>                        
                    </li>  
                  )}
                  
                </ul>

            </div>

          </div>    
      </div>

)
  }
  
  export default Questions