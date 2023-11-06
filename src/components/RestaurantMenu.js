import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerEffect from "./ShimmerEffect";
import { Menu_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, [ ]);

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { id } = useParams();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  const dispatch = useDispatch();
  // const handleAddItems = () => {
  //   dispatch(addItem("added item to "));
  // };

  const fetchData = async () => {
    const data = await fetch(Menu_API + id);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  if (restaurantInfo === null) return <ShimmerEffect />;

  const { name, cuisines, avgRating, costForTwo, totalRatingsString } =
    restaurantInfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      ?.card ||
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card?.itemCards;
  console.log(itemCards);

  if (itemCards === null) return <ShimmerEffect />;

  return (
    <div className="grid justify-center m-auto max-w-[70%] p-4">
      <div className="Res-card w-80 h-80  p-2 m-6">
        <ul>
          <li>
            <h2 className="grid text text-lg font-semibold">{name}</h2>
          </li>
          <li className="cuisines text-sm">
            <p>{cuisines.join(",")}</p>
          </li>
          <li className="cuisines text-sm">
            <p>
              {avgRating} || {totalRatingsString}
            </p>
          </li>
          <li className="cuisines text-md font-serif py-2">
            <p>Rs.{costForTwo / 100}</p>
          </li>
        </ul>
      </div>
      {/* <div className="restaurant-img rounded-lg md:w-[118] sm:w-[118] sm:h-full  sm:rounded-md">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
      </div> */}

      <div className="menu-items flex-col py-5 justify-center">
        <p>
          <h1 className=" justify-center text text-3xl font-bold">Menu</h1>{" "}
          {itemCards?.map((item) => (
            <ul>
              <div className="menu-card w-[100%] shadow-lg py-5 box-border hover:box-content grid">
                <li
                  key={item?.card?.info?.id}
                  className=" flex justify-start p-2"
                >
                  <div className="text  ">
                    <div className="text font-bold w-auto">
                      {item?.card?.info?.name}
                    </div>{" "}
                    -
                    <div className="text text-sm">
                      {" Rs."}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </div>
                  </div>
                  <div className="image-buttons ml-[600px] mr-0 flex flex-col">
                    <div>
                      <img
                        src={CDN_URL + item?.card?.info?.imageId}
                        alt="cart item "
                        className="width w-[35%] ml-auto"
                      />
                    </div>
                    <div className=" ml-auto mr-0 flex flex-row py-4">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => addFoodItem(item)}
                      >
                        Add
                      </button>
                      <button
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
                        onClick={() => removeFoodItem(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          ))}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
