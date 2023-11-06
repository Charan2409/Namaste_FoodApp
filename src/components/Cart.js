import { useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { clearCart } from "../utils/cartSlice";
import CartEmpty from "./CartEmpty";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <CartEmpty />
  ) : (
    <div className="flex flex-row h-auto">
      <div className="flex flex-col p-4">
        <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
        
        <div className="flex flex-wrap px-4 py-3 m-4">
          {cartItems.map((item) => (
            <FoodItem key={item.id} value={item} {...item.card.info} />
          ))}
        </div>
      </div>
      <div>
        <button
          className="bg-green-200 p-2 m-3"
          onClick={() => handleClearAll()}
        >
          Clear All
        </button>
        <button className="bg-blue-600 text-white font-semibold text-lg">
          <Link to="/ProceedToBuy">Proceed To Buy</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
