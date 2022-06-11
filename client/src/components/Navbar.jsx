import React from "react";
import logo from "../../images/cryptie-white.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="cryptie-logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Buy/Sell", "Grow", "Wallets", "Market"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-transparent border-[1px] py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-[#2952e3] hover:border-[#2952e3]">
          Sign Up
        </li>
        <li className="bg-[#2952e3] border-[1px] border-[#2952e3] py-2 px-7 mx-4 rounded-lg cursor-pointer hover:bg-transparent hover:border-[#fff]">
          Log In
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2 cursor-pointer">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Buy/Sell", "Grow", "Wallets", "Market"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
