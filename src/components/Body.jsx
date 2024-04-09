import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";
import RestCard from "./RestCard";
const Body = () => {
  const [restData, setRestData] = useState([]);
  const fetchData = async () => {
    const getdata = await fetch(SWIGGY_API);
    const json = await getdata.json();
    setRestData(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="my-5 space-y-4">
      <div className="border-4">
        <h2>Whats on ur mind</h2>
        <p>Slider</p>
      </div>
      <div className="border-4">
        <h2>Top restaurants</h2>
        <p>Slider</p>
      </div>
      <div className="border-4">
        {restData.map((item) => (
          <div key={item?.info?.id}>
            <h4>{item?.info?.name}</h4>
            <span>{item?.info?.avgRatingString}</span>{" "}
            <span>{item?.info?.sla.slaString}</span>
            <p>{item?.info?.cuisines.join(", ")}</p>
          </div>
        ))}
        <h2>Rrestaursnts with online food delivery</h2>
        <div> filter section </div>
        <RestCard />
      </div>
    </section>
  );
};

export default Body;
