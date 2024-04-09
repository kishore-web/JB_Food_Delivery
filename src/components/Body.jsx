import RestaurantSection from "./RestaurantSection";
const Body = () => {
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
        <h2>Rrestaursnts with online food delivery</h2>
        <div> filter section </div>
        <RestaurantSection />
      </div>
    </section>
  );
};

export default Body;
