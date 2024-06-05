import React, { useEffect, useState } from "react"

function CategoryFilter({ products, setFilteredProducts }) {
    
    const [selectedCategory, setSelectedCategory] = useState(products)
    const [sortCategory, setSortCategory] = useState('reconended')

    const [priceFilter, setPriceFilter] = useState(50)

    // useEffect(() => {
    //     let filtered = products.filter(product => product.category.includes(selectedCategory) && product.price >= priceFilter)
    //     setSelectedCategory(filtered)
    // },[products, CategoryFilter, selectedCategory])

    const handleCategorySelect = (category) => {        
        setSelectedCategory(category)
        const filteredProducts = products.filter(product => category === null ? true : product.category === category) 
        setFilteredProducts(filteredProducts)
    }
    const handleCategorySort = (sort) => {        
        setSortCategory(sort)
        const sortProducts = products.filter(product => sortCategory === null ? true : product.sortcategory === sort)
        setFilteredProducts(sortProducts)
    }

    const handlePriceSelect = (price) => {
        setPriceFilter(price.target.value)
    }

    return (
        <div className="category">
        <div className="category__card">
            <div className="category__title">Category</div>
        
            <ul className="category__list">
                <li className={selectedCategory === 'pizza' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('pizza')}>
                    <h4 className="category__item_title category__item_title-1" >Pizza</h4>
                </li>
                <li className={selectedCategory === 'main' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('main')}>
                    <h4 className="category__item_title category__item_title-1" >Dish</h4>
                </li>
                <li className={selectedCategory === 'donut' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('donut')}>
                    <h4 className="category__item_title category__item_title-1" >Donut</h4>
                </li>
                <li className={selectedCategory === 'ice' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('ice')}>
                    <h4 className="category__item_title category__item_title-1" >Ice</h4>
                </li>
            </ul>

            <div className="category__title">Sort By</div>
            <div className="category__card_col">
                <div className="category__card_row">
                    <div className={sortCategory === 'Recomended' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Recomended')}>Recomended</div>
                    <div className={sortCategory === 'Fast Delivery' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Fast Delivery')}>Fast Delivery</div>
                </div>
                <div className={sortCategory === 'Most Popular' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Most Popular')}>Most Popular</div> 
           </div>

            <div className="category__title">Price</div>
            <div className="category__title_line"> 
                <input className="category__title_circle" type="range" min="0" max="100" value={priceFilter} onChange={handlePriceSelect} />            
            </div>
            
            <ul className="category__price">
                <li className="category__price_item">$ 0</li>
                <li className="category__price_item">$ 10</li>
                <li className="category__price_item">$ 20</li>
                <li className="category__price_item">$ 30</li>
                <li className="category__price_item">$ 40</li>
                <li className="category__price_item">$ 50</li>
            </ul>
            <div className="categotyr__button">
                <button type="button" className="btn btn--apply" onClick={() => {handleCategorySelect(null), handleCategorySort(null)}}>Reset</button>
            </div>
        </div>
    </div>                

        
    )
  }
  
  export default CategoryFilter