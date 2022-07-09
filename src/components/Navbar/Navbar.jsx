import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import I18n from "../I18n/I18n";
import Darkmode from "../DarkMode/Darkmode";
import { useTranslation } from "react-i18next";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const { t } = useTranslation(["Navbar"]);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <h3 style={{ color: "var(--gray-color)" }}>bouba portfolio</h3>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{t(`${item}`)}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {/* small screens */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {t(`${item}`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
      <div className="app__navbar-icons">
        <I18n />
        <Darkmode />
      </div>
    </nav>
  );
};

export default Navbar;
