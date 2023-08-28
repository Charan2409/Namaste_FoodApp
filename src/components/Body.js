import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import ShimmerEffect from "./ShimmerEffect";
import { Link } from "react-router-dom";
import { Restaurant_URL } from "../utils/constants";
import useOnline from "./useOnline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurants);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are Offline!! Please check your network connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerEffect />
  ) : (
    <div className="body">
      <div className="Search bg-pink-50 my-5 p-2 ">
        <input
          type="text"
          placeholder="Search for restaurant..."
          className="p-2 focus:bg-green-50 rounded-md m-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button  px-4 p-2 mx-1 bg-blue-600 rounded-full text-sm text-white hover:bg-blue-800 active:bg-blue-800 focus:ring focus:ring-blue-800 hover:shadow-xl active:placeholder:font-extrabold"
          onClick={() => {
            let filteredRestaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.data.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="res-btn-rating"
        onClick={() => {
          let mainList = listOfRestaurants.filter(
            (restaurant) => restaurant.data.avgRating > 4
          );
          setFilteredRestaurants(mainList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="Res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/Restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
