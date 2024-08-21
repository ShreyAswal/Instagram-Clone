import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaUserFriends,
  FaUserPlus,
  FaPlusSquare,
} from "react-icons/fa";

const MobileNav = () => {
  const SidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: <FaSearch className="text-xl" data-testid="FaSearch"/>,
    },
    {
      name: "Followers",
      link: "/followers",
      icon: <FaUserFriends className="text-xl" data-testid="FaUserFriends"/>,
    },
    {
      name: "Following",
      link: "/following",
      icon: <FaUserPlus className="text-xl" data-testid="FaUserPlus"/>,
    },
    {
      name: "Create Post",
      link: "/create",
      icon: <FaPlusSquare className="text-xl" data-testid="FaPlusSquare"/>,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
          alt="Profile"
          className="h-5 w-5"
        ></img>
      ),
    },
  ];
  return (
    <div>
      <div className="w-full h-auto">
        <div className="w-full h-auto flex items-center gap-px-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center justify-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group"
          >
            <FaHome className="text-xl" data-testid="FaHome" />
          </Link>
          {SidebarItems.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              className="w-full h-auto flex items-center justify-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
