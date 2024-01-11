import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using useSelectore
  const cartItems = useSelector((store) => store.cart.items);
  console.log("hi", cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 m-4">
          <li className="px-4">Online Status : {OnlineStatus ? "✅" : "⛔"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>

          <button
            className="btn-login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">
            <Link className="links">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
