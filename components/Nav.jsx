import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandReactNative } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hidden laptop:flex justify-between z-30 fixed border-b-4 border-b-rose-700 w-full h-auto bg-gray-900">
        <motion.div
          className="p-5 ml-10 mt-3 font-extrabold text-rose-600	"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <a href="/" className=" text-4xl flex space-x-5  ">
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ repeat: Infinity, type: "spring", stiffness: 50 }}
            >
              <TbBrandReactNative className=" text-5xl text-blue-500" />
            </motion.div>
            <h1>r3ndo0</h1>
          </a>
        </motion.div>

        {/* <--------Primary Navbar---------> */}

        <motion.div
          className="hidden laptop:flex m-auto  mr-10 text-white "
          animate={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Link href="/">
            <a className="m-3  p-4 px-8 hover:text-zinc-300 cursor-pointer hover:rounded">
              Home
            </a>
          </Link>
          <Link href="/otherapps">
            <a className="m-3 p-4 px-8 hover:text-zinc-300 cursor-pointer hover:rounded">
              Unsplash API App
            </a>
          </Link>
          <a
            href="/weatherapp"
            className="m-3  p-4 px-8 hover:text-zinc-300 cursor-pointer hover:rounded"
          >
            Weather App
          </a>
          <a
            href="#contacts"
            className="m-3 p-4 font-bold text-white rounded cursor-pointer hover:bg-rose-500 bg-rose-700"
          >
            Contact Info
          </a>
        </motion.div>
      </div>
      {/* <--------Secondary Navbar---------> */}
      <motion.div
        className="laptop:hidden fixed w-full z-20"
        animate={{ y: 0 }}
        initial={{ y: -200 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className=" flex-row justify-between bg-gray-900">
          <div className="flex justify-between text-white font-extrabold">
            <Link href="/">
              <a className=" text-4xl items-center flex m-5 space-x-5 text-rose-600 ">
                <motion.div
                  className="m-0  text-blue-500 p-0"
                  animate={{ rotateZ: 360 }}
                  transition={{
                    repeat: Infinity,
                    type: "spring",
                    stiffness: 50,
                  }}
                >
                  <TbBrandReactNative className="text-5xl" />
                </motion.div>
                <h1>r3ndo0</h1>
              </a>
            </Link>
            <button
              className=" text-6xl p-5 m-25 text-rose-600	"
              onClick={handleClick}
            >
              {open ? <GiHamburgerMenu /> : <VscChromeClose />}
            </button>
          </div>
        </div>

        <motion.div
          className={
            open
              ? "hidden "
              : "flex flex-col  w-full bg-gray-900 text-rose-600 justify-center divide-y  "
          }
          layout
        >
          <a className="p-5 m-5 cursor-pointer font-extrabold  ">
            Contact Info
          </a>
          <Link href="/otherapps">
            <a className="p-5 m-5 font-extrabold ">Unsplash API App</a>
          </Link>
          <a href="/weatherapp" className="p-5 m-5  font-extrabold ">
            Weather App
          </a>
          <a className="p-5 m-5  font-extrabold ">Contact</a>
        </motion.div>
      </motion.div>
    </>
  );
}
