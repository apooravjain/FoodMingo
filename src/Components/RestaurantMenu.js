//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1046449&lng=78.58701119999999&restaurantId=510045&catalog_qa=undefined&submitAction=ENTER

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  //const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {fetchMenuData() }, []);

  // const fetchMenuData = async() => {
  //     const menuData = await fetch(Menu_API + resId);
  //     const json = await menuData.json();
  //     console.log(json.data);
  //     setresInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;
  //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="m-4 px 4 text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
