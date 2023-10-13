import Logo from "./Logo";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-[90%] py-3 mx-auto flex justify-between items-center ">
      <div className="font-bold flex justify-around items-baseline space-x-20">
        <Logo />
        <div className="flex items-center space-x-1">
          <span>Solutions</span>
          <BsChevronDown className="text-[#0076CE] text-lg" />
        </div>
        <div className="flex items-center space-x-1">
          <span>Features</span>
          <BsChevronDown className="text-[#0076CE] text-lg" />
        </div>
        <div className="flex items-center space-x-1">
          <span>About</span>
          <BsChevronDown className="text-[#0076CE] text-lg" />
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="w-20 px-3 py-1 rounded-xl border border-[#0076CE] text-[#0076CE] font-semibold">
          Login
        </button>
        <button className="w-20 px-3 py-1 rounded-xl border border-[#0076CE] bg-[#0076CE] font-semibold text-white">
          Register
        </button>
      </div>
    </div>
  );
};
export default Navbar;
