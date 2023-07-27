import { useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-200 p-2 m-3" onClick={() => handleClearAll()}>
        Clear All
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
