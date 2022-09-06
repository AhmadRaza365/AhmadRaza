import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { HiCode, HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
  let Links = [
    { name: "About Me", path: "/" },
    { name: "My Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [openMenu]);

  return (
    <nav
      className={`py-2 px-5 md:px-10 bg-dark-primary/70 backdrop-blur-sm z-20 sticky top-0 flex justify-between items-center shadow-lg`}
    >
      <Link href="/">
        <a className="cursor-pointer flex gap-3 items-center">
          <HiCode className="text-4xl sm:text-5xl text-light-primary" />
          <h1 className="text-2xl sm:text-3xl font-bold text-light-primary">
            Ahmad Raza
          </h1>
        </a>
      </Link>
      <button
        className="block md:hidden"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {openMenu ? (
          <CgClose className="text-3xl text-light-primary cursor-pointer" />
        ) : (
          <HiMenu className="text-3xl text-light-primary cursor-pointer" />
        )}
      </button>
      <ul
        className={`fixed top-full right-0 z-10 md:z-auto md:static w-3/5 h-screen md:h-auto flex-col md:flex-row items-center justify-start md:justify-end gap-10 md:gap-5 pt-16 md:pt-0 bg-dark-primary md:bg-transparent 
        ${openMenu ? "flex" : "hidden md:flex"}
        `}
        ref={menuRef}
      >
        {Links.map((link, index) => (
          <li key={index} className="">
            <Link href={link.path}>
              <a className="text-2xl font-bold text-light-primary hover:text-light-secondary transition duration-300 ease-in-out">
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
