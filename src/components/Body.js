import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";



const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="Res-container">
        {
          resList.map(restaurant => <RestaurantCard key = {restaurant.data.id } resData={restaurant}/>)
        }
      </div>
    </div>
  );
};

export default Body;


