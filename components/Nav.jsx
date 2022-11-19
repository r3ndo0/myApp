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
      <div className="hidden laptop:flex items-center justify-between z-30 fixed border-b-4 border-b-rose-700 w-full h-auto bg-gray-900">
        <motion.div
          className="p-1 ml-4 mt-1 font-extrabold text-blue-200	"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className=" text-2xl flex space-x-2  ">
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ repeat: Infinity, type: "spring", stiffness: 50 }}
            >
              <TbBrandReactNative size={30} className=" text-blue-200" />
            </motion.div>
            <Link href="/">r3ndo0</Link>
          </div>
        </motion.div>

        {/* <--------Primary Navbar---------> */}

        <motion.div
          className="hidden laptop:flex justify-center items-center m-auto  mr-2 text-white "
          animate={{ x: 0 }}
          initial={{ x: 200 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Link href="/">
            <div className="m-3 text-sm p-1 px-2 hover:text-zinc-300 cursor-pointer hover:rounded">
              Home
            </div>
          </Link>
          <Link href="/otherapps">
            <div className="m-3 p-1 text-sm px-2 hover:text-zinc-300 cursor-pointer hover:rounded">
              Unsplash API App
            </div>
          </Link>
          <div className="m-3  p-1 text-sm px-2 hover:text-zinc-300 cursor-pointer hover:rounded">
            <Link href="/weatherapp">Weather App</Link>
          </div>
          <div className="m-3 px-2 py-2 text-sm font-bold text-white rounded cursor-pointer hover:bg-rose-500 bg-rose-700">
            <Link href="/aboutme">About Me</Link>
          </div>
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
              <div className=" text-4xl items-center flex m-5 space-x-5 text-rose-600 ">
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
              </div>
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
          <div className="p-5 m-5 cursor-pointer font-extrabold  ">
            <Link href="/aboutme">About Me</Link>
          </div>
          <Link href="/otherapps">
            <div className="p-5 m-5 font-extrabold ">Unsplash API App</div>
          </Link>
          <div href="/weatherapp" className="p-5 m-5  font-extrabold ">
            Weather App
          </div>
          <div className="p-5 m-5  font-extrabold ">Contact</div>
        </motion.div>
      </motion.div>
    </>
  );
}
