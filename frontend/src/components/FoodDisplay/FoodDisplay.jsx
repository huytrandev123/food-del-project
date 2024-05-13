/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes nearr you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          // console.log('food-list', item);


          // Filter cateogry
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                des={item.description}
              />
            );
          } 
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
