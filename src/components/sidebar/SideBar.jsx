import React, { useState } from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";
import { log_out } from "../../redux/actions/auth.action";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ sidebar, handleToggleSidebar, selecteur }) => {
  const [activeNav, setActiveNav] = useState("home");
  const handleClick = (value) => {
    setActiveNav(value);
  };
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li 
          onClick={() => handleClick("home")}
          className={activeNav === "home" ? "active" : ""}
          >

          <MdHome size={23} />
          <span>Accueil</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li
          onClick={() => handleClick("subscript")}
          className={activeNav === "subscript" ? "active" : ""}
          >

          <MdSubscriptions size={23} />
          <span>Abonnements</span>
        </li>
      </Link>

      <Link to="/feed/like">
        <li
          onClick={() => handleClick("like")}
          className={activeNav === "like" ? "active" : ""}
          >

          <MdThumbUp size={23} />
          <span>Vidéos "J'aime"</span>
        </li>
      </Link>

      <li
        onClick={() => handleClick("story")}
        className={activeNav === "story" ? "active" : ""}
        >

        <MdHistory size={23} />
        <span>Historique</span>
      </li>

      <li
        onClick={() => handleClick("library")}
        className={activeNav === "library" ? "active" : ""}
        >

        <MdLibraryBooks size={23} />
        <span>Librairie</span>
      </li>

      <hr />

      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Déconnexion</span>
      </li>

      <hr />
    </nav>
  );
};

export default SideBar;
