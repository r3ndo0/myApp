import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 flex m-auto p-auto items-center justify-between border-4  border-rose-700 w-full h-auto">
      <div className="w-1/2 h-72  ">
        <h1 className="text-gray-300 py-10 lg:text-3xl">Location </h1>
        <h1 className="text-gray-300 py-3 lg:text-2xl">Iran-Shiraz </h1>
        <h1 className="text-gray-300 py-3 lg:text-2xl">Iran-Tehran </h1>
      </div>
      <div className="w-1/2 h-72 ">
        <h1 className="text-gray-300 py-10 lg:text-3xl">
          In Case Your Mail App Does Not work
        </h1>
        <h1 className="text-gray-300 py-3 lg:text-2xl">
          This Is My Email Address
        </h1>
        <h1 className="text-rose-700 font-extrabold py-3 lg:text-3xl">
          r3ndo0@gmail.com
        </h1>
      </div>
      <div className="w-1/2 h-72 ">
        <h1 className="text-gray-300 py-10 lg:text-3xl">Phone Number </h1>
        <h1 className="text-gray-300 py-3 lg:text-2xl">+989100037160 </h1>
        <h1 className="text-rose-700 font-extrabold py-3 lg:text-3xl">
          r3ndo0 ;-)
        </h1>
      </div>
    </div>
  );
}

export default Footer;
