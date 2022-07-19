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
        <li className="bg-[#325efb] border-[1px] border-[#2952e3] py-2 px-7 mx-1 rounded-lg cursor-pointer hover:bg-[#2952e3]">
          Sign In
        </li>
        <li className="bg-transparent border-[1px] py-2 px-7  rounded-lg cursor-pointer hover:bg-[#ffffff19]">
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
            className="z-10 fixed -top-0 -left-0 p-3 w-full h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md bg-[#25335c] text-white animate-slide-in"
          >
            <li className="text-2xl w-full flex justify-end my-2 cursor-pointer pb-10">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Buy/Sell", "Grow", "Wallets", "Market"].map((item, index) => (
              <NavbarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg pt-5"
              />
            ))}
            <div className="flex flex-col-reverse gap-7 list-none text-white pt-2">
              <li className="bg-transparent border-[1px] py-2 px-7  rounded-lg cursor-pointer hover:bg-[#2952e3] hover:border-[#2952e3]">
                Sign Up
              </li>
              <li className="bg-[#2952e3] border-[1px] border-[#2952e3] py-2 px-7 mx-1 rounded-lg cursor-pointer hover:bg-transparent hover:border-[#fff] mt-3">
                Sign In
              </li>
            </div>

            <div className="pt-20 flex gap-6 text-[#ffffff99] text-sm">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
