import React, { useState } from "react";
import { Link } from "react-scroll";
import { links } from "./Mylinks";
import "./Navbar.css"

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [togglerNav, setTogglerNav] = useState(false);
   const [open, setOpen] = useState(false);
    const handleSublinkClick = (sublink) => {
      setOpen(false);
      setSubHeading(sublink);
      setTogglerNav(!togglerNav);
    };

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-blue-600 transition-all"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span
                className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2"
                id="forward"
              >
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div className="" id="forward">
                <div
                  className="absolute top-20 shadow-lg  hidden group-hover:md:block hover:md:block"
                  id="forward"
                >
                  <div className="py-3" id="forward">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 rotate-45"
                      id="forward"
                    ></div>
                  </div>
                  <div className="bg-white border-t-4 border-t-blue-600 p-5 grid grid-cols-2 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg text-blue-600 font-semibold">
                          <hr />
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-lg text-gray-600 my-5">
                            <Link
                              to={slink.link}
                              smooth={true}
                              duration={500}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            id="mobile-nav"
            className={` ${open ? "left-0" : "left-[-100%]"}
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <hr />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 hover:text-blue-600  transition pl-14">
                        <Link
                          to={slink.link}
                          smooth={true}
                          duration={500}
                          onClick={() => handleSublinkClick(slink.name)}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
