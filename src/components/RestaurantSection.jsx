import RestCard from "./RestCard";
import { SWIGGY_API } from "../utils/constant";
import { useEffect, useState } from "react";

const RestaurantSection = () => {
  const [restData, setRestData] = useState([]);
  const fetchData = async () => {
    const getdata = await fetch(SWIGGY_API);
    const json = await getdata.json();
    setRestData(json);
    console.log(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // fetchData();
  return (
    <div>
      <RestCard />
    </div>
  );
};

export default RestaurantSection;
