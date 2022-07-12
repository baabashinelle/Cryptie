import React from "react";
import logo from "../../images/cryptie-white.png";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex  justify-between items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src={logo}
          alt="cryptie-logo"
          className="md:w-32 cursor-pointer lg:ml-[2rem] xl:ml-[8rem] w-20"
        />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Buy/Sell", "Grow", "Wallets", "Market"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className="list-none text-white md:flex hidden">
        <li className="bg-[#2952e3] border-[1px] border-[#2952e3] py-2 px-7 mx-1 rounded-lg cursor-pointer hover:bg-[#2546bd] ">
          Sign In
        </li>
        <li className="bg-transparent border-[1px] py-2 px-7  rounded-lg cursor-pointer hover:bg-white">
          Sign Up
        </li>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <AiOutlineMenu
            fontSize={28}
            className="text-white md:hidden cursor-pointer mr-[1rem]"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer text-xl w-full my-2 z-10 fixed -top-10 -right-0"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 cursor-pointer">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Buy/Sell", "Grow", "Wallets", "Market"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg pt-3"
              />
            ))}
            <div className="flex flex-col-reverse gap-5 list-none text-white">
              <li className="bg-transparent border-[1px] py-2 px-7  rounded-lg cursor-pointer hover:bg-[#2952e3] hover:border-[#2952e3]">
                Sign Up
              </li>
              <li className="bg-[#2952e3] border-[1px] border-[#2952e3] py-2 px-7 mx-1 rounded-lg cursor-pointer hover:bg-transparent hover:border-[#fff] mt-3">
                Sign In
              </li>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
