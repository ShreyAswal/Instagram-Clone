import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaUserFriends,
  FaUserPlus,
  FaPlusSquare,
} from "react-icons/fa";

const LargeNav = () => {
  const SidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: <FaSearch className="text-2xl" />,
    },
    {
      name: "Followers",
      link: "/followers",
      icon: <FaUserFriends className="text-2xl" />,
    },
    {
      name: "Following",
      link: "/following",
      icon: <FaUserPlus className="text-2xl" />,
    },
    {
      name: "Create Post",
      link: "/create",
      icon: <FaPlusSquare className="text-2xl" />,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
          alt="Profile"
          className="h-6 w-6"
        ></img>
      ),
    },
  ];
  return (
    <div className="w-full h-full relative">
      <Link to="/" className="mb-10 px-4 lg:block sm:hidden md:hidden hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkbGJWJSc6kNJTguH7SRIRcL_tCYcWpaZhw&s"
          alt="Instagram logo"
          className="w-28 h-auto"
        ></img>
      </Link>
      <div className="w-full h-auto flex items-center flex-col gap-y-2">
        <Link
          to="/"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group"
        >
          <FaHome className="text-2xl"/>
          <p className="text-lg lg:block md:hidden sm:hidden hidden">Home</p>
        </Link>
        {SidebarItems.map((item) => (
          <Link
            to={item.link}
            key={item.name}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group"
          >
            {item.icon}

            <p className="text-lg lg:block md:hidden sm:hidden hidden">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LargeNav;
