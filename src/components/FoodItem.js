import { CDN_URL } from "../utils/constants";

const FoodItem = ({ name, category, imageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={CDN_URL + imageId} alt="food item" />
      <h2 className="font-bold text-xl">{name}</h2>
      <span>{category}</span>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
