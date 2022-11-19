import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const variant = {
  animate: { x: 0 },
  initial: { x: 200 },
  transition: { type: "spring", stiffness: 100 },
};
const variant1 = {
  animate: { y: 0 },
  initial: { y: 200 },
  transition: { type: "spring", stiffness: 100 },
};

export default function Hero() {
  return (
    <div className="h-auto laptop:h-screen grid grid-cols-1 laptop:grid-cols-2 bg-rose-700 w-auto ">
      <motion.div
        className="h-[1000px] laptop:h-screen laptop:mr-1 w-full  bg-gray-900"
        variants={variant1}
        animate={"animate"}
        initial={"initial"}
        transition={"transition"}
      >
        <div className=" pt-72">
          <h1 className="text-blue-200 py-1 px-10 font-extrabold text-5xl">
            In Search For Greatness
          </h1>
          <h3 className="text-blue-200 mb-5 p-7 text-3xl">
            I <span className="text-rose-700 font-extrabold ">Love </span>
            Building Web Apps ~
          </h3>
          <Link href="/otherapps" target="_blank">
            <motion.button
              whileTap={{ scale: 1.1 }}
              className="bg-rose-700  text-gray-300 font-extrabold hover:bg-rose-600 mt-10 mx-5 rounded-md px-10 py-4  z-2 "
            >
              Unsplash API App
            </motion.button>
          </Link>
          <motion.button
            whileTap={{ scale: 1.1 }}
            className="bg-gray-300 hover:bg-gray-100  font-extrabold text-gray-900 mt-10  rounded-md px-10 py-4  z-2 "
          >
            <Link href="/weatherapp">Weather App</Link>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="h-screen w-full pt-16 grid text-4xl grid-cols-2 bg-gray-100 gap-2 	"
        variants={variant}
        animate={"animate"}
        initial={"initial"}
        transition={"transition"}
      >
        <motion.a
          href="https://www.instagram.com/r3ndo0"
          target="_blank"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          whileTap={{ scale: 1.2 }}
          className="flex flex-col justify-center  items-center"
        >
          <Image
            className="cursor-pointer"
            src="/insta.png"
            width="144px"
            height="144px"
          />
          <h1>Instagram</h1>
        </motion.a>
        <motion.a
          href="https://www.github.com/r3ndo0
        "
          target="_blank"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          whileTap={{ scale: 1.2 }}
          className="flex flex-col justify-center mr-12 items-center"
        >
          <Image
            className="cursor-pointer"
            src="/github.png"
            width="144px"
            height="144px"
          />
          <h1>Github</h1>
        </motion.a>
        <motion.a
          href="https://twitter.com/r3ndo0"
          target="_blank"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          whileTap={{ scale: 1.2 }}
          className="flex flex-col justify-center mr-12 items-center"
        >
          <Image
            className="cursor-pointer"
            src="/twitter.png"
            width="144px"
            height="144px"
          />
          <h1>Twitter</h1>
        </motion.a>
        <motion.a
          href="https://t.me/r3ndo0"
          target="_blank"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          whileTap={{ scale: 1.2 }}
          className="flex flex-col justify-center mr-12 items-center"
        >
          <Image
            className="cursor-pointer"
            src="/telegram.png"
            width="144px"
            height="144px"
          />
          <h1>Telegram</h1>
        </motion.a>
      </motion.div>
    </div>
  );
}
