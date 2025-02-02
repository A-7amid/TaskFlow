import React from "react";

const Navbar = () => {
  return (
    <nav className="min-h-screen max-h-full bg-primary dark:bg-neutral-800 w-fit hidden md:flex text-white py-6">
      <div className="w-full mx-5 mr-7">
        <h2 className="font-semibold mb-5 text-3xl">
          Task<span className="text-blue dark:text-white">Flow</span>
        </h2>

        <div className="flex flex-col font-medium">
          <span className="flex bg-dark duration-300 dark:text-neutral-400 dark:hover:bg-amber-950 dark:hover:text-orange-100 cursor-pointer dark:bg-transparent items-center rounded-md py-1 px-4 gap-x-3 pr-24">
            <img src="/grid.png" alt="sign" className="size-5" />

            <div>Dashboard</div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
