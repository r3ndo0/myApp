import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="laptop:grid-cols-2 text-gray-200 bg-gray-100  justify-center p-10 py-32 text-2xl  items-center  grid grid-cols-1  "
    >
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1 className="m-auto py-3 px-5 items-center">
          My first encounter with web developement which did not last long was
          at the age of 20 , where I learned how to build a simple webpage using
          HTML. HTML is like the ability to walk for a child who is trying to
          grow and become a sprinter.
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          whileTap={{ scale: 1.1 }}
        >
          I have been working on my CSS skills since the beginning of my
          developement journey. I can say that CSS is the most underrated
          platform since it is as important and effective as JS and HTML. I have
          experience with Bootstrap5 and Tailwind but most of the job is done in
          pure CSS since it is more customizable.
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          whileTap={{ scale: 1.1 }}
        >
          JS
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          whileTap={{ scale: 1.1 }}
        >
          Reactjs-Nextjs
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          whileTap={{ scale: 1.1 }}
        >
          Nodejs
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          wwhileTap={{ scale: 1.1 }}
        >
          Express
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          whileTap={{ scale: 1.01 }}
        >
          MongoDB
        </h1>
      </motion.div>
      <motion.div
        className="card"
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        // transition={{ type: "spring", stiffness: 100 }}
        whileTap={{ scale: 1.1 }}
      >
        <h1
          className="m-auto py-3 px-5 items-center "
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          // transition={{ type: "spring", stiffness: 100 }}
          whileTap={{ scale: 1.1 }}
        >
          Basically every Tech with a beginner-friendly Documentation
        </h1>
      </motion.div>
    </div>
  );
}
