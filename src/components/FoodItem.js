import { CDN_URL } from "../utils/constants";
import cartSlice from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, category, imageId, price, item }) => {
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="w-[70%] p-2 m-3 shadow-lg bg-pink-50 flex flex-col justify-between">
      <div className="flex flex-row">
        <div>
          <img
            src={CDN_URL + imageId}
            alt="food item"
            className="width w-auto h-20 mr-5"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">{name}</h2>
            <span>{category}</span>
          </div>
          <div className="flex flex-row justify-between">
            <h4>Rupees: {price / 100}</h4>
            <button
              onClick={() => handleRemove(item)}
              className="text-white ml-10 bg-red-600 font-semibold rounded-md p-2"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
