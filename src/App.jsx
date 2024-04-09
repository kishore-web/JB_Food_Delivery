import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <div className="max-w-[1280px] m-auto bg-slate-50 shadow-md">
        <Header />
        {/*********************** Body Section **********************/}
        <Body />
        <h1 className="text-3xl font-bold text-center">Food Delivery App</h1>
      </div>
    </div>
  );
}
export default App;
