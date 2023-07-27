import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info;

  return (
    <div className="Res-card w-56 h-80 shadow-lg bg-pink-50 p-2 m-6 h-96">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold text-xl">{name}</h3>
      <h5 className="cuisine">{cuisines.join(", `")} </h5>
      <h5>{avgRating} Stars</h5>
      <h5>{deliveryTime} Minutes</h5>
      <h5>{costForTwo} </h5>
    </div>
  );
};

export default RestaurantCard;
