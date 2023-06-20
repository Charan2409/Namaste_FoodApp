import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import ShimmerEffect from "./ShimmerEffect";
import { Link } from "react-router-dom";
import { Restaurant_URL } from "../utils/constants";
import useOnline from './useOnline';

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
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are Offline!! Please check your network connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerEffect />
  ) : (
    <div className="body">
      <div className="Search">
        <input
          type="search"
          id="search"
          placeholder="Search for restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
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
      <div className="Res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/Restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
