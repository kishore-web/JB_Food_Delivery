import { FaSearch, FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 gap-10 shadow-lg">
      <div className="w-24">
        <img src="../src/utils/logo.png" className="w-full" alt="logo" />
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
  );
};

export default Header;
