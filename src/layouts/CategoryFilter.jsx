import React, { useEffect, useState } from "react"
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';

const CustomSlider = styled(Slider)({
    '& .MuiSlider-thumb': {
      width: 20,
      height: 20,
    },
  });

function CategoryFilter({products, setFilteredProducts }) {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortCategory, setSortCategory] = useState('')

    const [priceRange, setPriceRange] = useState(30);

    useEffect(() => {
        const filteredProducts = products.filter(product => {
            return (selectedCategory === 'all' || product.category === selectedCategory) &&
                (sortCategory === '' || product.sortcategory === sortCategory) &&
                product.price <= priceRange + 1;
        });
        setFilteredProducts(filteredProducts);
    }, [selectedCategory, sortCategory, priceRange]);

    const handleCategorySelect = (category) => {        
        setSelectedCategory(category)
    }
    const handleCategorySort = (sort) => {        
        setSortCategory(sort)
    }
    const handlePriceChange = (event) => {      
      const value = event.target.value
      setPriceRange(value);
    };

    return (
        <div className="category">
            <div className="category__card">
                <div className="category__title">Category</div>
                <ul className="category__list">

                    <li className={selectedCategory === 'pizza' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('pizza')}>
                        <h4 className={selectedCategory === 'pizza' ? "category__item_title-1 active" : "category__item_title-1"} >Pizza</h4>
                    </li>
                    <li className={selectedCategory === 'main' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('main')}>
                        <h4 className={selectedCategory === 'main' ? "category__item_title-2 active" : "category__item_title-2"}>Dish</h4>
                    </li>
                    <li className={selectedCategory === 'donut' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('donut')}>
                        <h4 className={selectedCategory === 'donut' ? "category__item_title-3 active" : "category__item_title-3"} >Donut</h4>
                    </li>
                    <li className={selectedCategory === 'ice' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('ice')}>
                        <h4 className={selectedCategory === 'ice' ? "category__item_title-4 active" : "category__item_title-4"} >Ice</h4>
                    </li>
                </ul>

                <div className="category__title">Sort By</div>
                <div className="category__card_col">
                    <div className="category__card_row">
                        <div className={sortCategory === 'Recommended' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Recomended')}>Recomended</div>
                        <div className={sortCategory === 'Fast Delivery' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Fast Delivery')}>Fast Delivery</div>
                    </div>
                    <div className={sortCategory === 'Most Popular' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Most Popular')}>Most Popular</div> 
            </div>
            <div>

            <div className="category__title">Price</div>
                <CustomSlider
                    value={priceRange}
                    onChange={handlePriceChange}
                    step={1}
                    min={0}
                    max={50}
                    valueLabelDisplay="auto"            
                    />
                <ul className="category__price">
                    <li className="category__price_item">$ 0</li>
                    <li className="category__price_item">$ 10</li>
                    <li className="category__price_item">$ 20</li>
                    <li className="category__price_item">$ 30</li>
                    <li className="category__price_item">$ 40</li>
                    <li className="category__price_item">$ 50</li>
                </ul>
                
                <div className="category__button">
                    <button type="button" className="btn btn--apply" onClick={() => {handleCategorySelect('all'), handleCategorySort('')}}>Reset</button>
                </div>
            </div>
            </div>                
        </div>        
    )
  }
  
  export default CategoryFilter
