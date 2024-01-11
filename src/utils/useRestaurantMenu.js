import { useEffect, useState } from "react";
import { Menu_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();

    setresInfo(json.data);
    //console.log(json.data);
  };
  //console.log(resInfo);
  return resInfo;
};

export default useRestaurantMenu;
