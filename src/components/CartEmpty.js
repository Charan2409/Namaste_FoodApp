import React from "react";

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-400 mb-4"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16 5a3 3 0 1 1-2.375-1.175l-7.416 8.709-3.02-2.33a3 3 0 1 1 3.864-4.566L10 9l6.661-7.823a3 3 0 1 1 3.864 4.566l-3.02 2.33L16 5zm3.146 4.146l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L12 9.586V3a1 1 0 1 1 2 0v6.586l1.146-1.144a1 1 0 1 1 1.414 1.414z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-gray-600 text-lg mb-2">Your cart is empty</p>
      <p className="text-gray-400">Add some delicious items to your cart!</p>
    </div>
  );
};

export default CartEmpty;
