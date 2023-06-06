import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import ShimmerEffect from "./ShimmerEffect";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4130705&lng=78.57557249999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

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
