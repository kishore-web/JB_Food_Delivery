import { FaSearch, FaCartPlus } from "react-icons/fa";
function App() {
  return (
    <div className="max-w-[1280px] m-auto border-2 border-blue-400">
      <header className="flex justify-between items-center py-2 gap-10">
        <div>
          <img src="" alt="logo" />
        </div>
        <div className="w-4/12 flex items-center">
          <input
            type="text"
            className="focus:ring-2 px-4 py-1 focus:outline-none w-full focus:ring-blue-400 ring-1 ring-slate-300 rounded-full"
          />
          <FaSearch className="text-slate-500 -ml-8" />
        </div>
        <div>
          <ul className="flex gap-10">
            <li>SignIn</li>
            <li className="flex items-center">
              <FaCartPlus />
              <p className="pl-1">cart</p>
            </li>
          </ul>
        </div>
      </header>
      <h1 className="text-3xl font-bold text-center">Food Delivery App</h1>
    </div>
  );
}
export default App;
