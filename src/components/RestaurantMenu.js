import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerEffect from "./ShimmerEffect";
import { Menu_API } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const data = await fetch(Menu_API + id);
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json?.data);
  };

  if (restaurantInfo === null) return <ShimmerEffect />;

  const { name, cuisines, avgRating, costForTwoMessage, totalRatingsString } =
    restaurantInfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      ?.card ||
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card;

  console.log(itemCards);
  if (itemCards === null) return <ShimmerEffect />;

  return (
    <div className="menu">
      <h1>Restaurant id: {id}</h1>
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <p>{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <p>{totalRatingsString}</p>
      <p>
        {" "}
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" RS."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
