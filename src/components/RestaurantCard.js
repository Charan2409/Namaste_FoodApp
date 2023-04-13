import React from "react";


const RestaurantCard = ({ resData }) => {

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime ,costForTwo } = resData?.data;
  return (
    <div className="Res-card">
        <img className="res-logo" src= { "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } alt="res-logo"/>
        <h3>{ name }</h3>
        <h5 className="cuisine">{ cuisines.join(", `") } </h5>
        <h5>{ avgRating } Stars</h5>
        <h5>{ deliveryTime } Minutes</h5>
        <h5>₹{ costForTwo /100 } for Two </h5>
    </div>

  );
};

export default RestaurantCard;
