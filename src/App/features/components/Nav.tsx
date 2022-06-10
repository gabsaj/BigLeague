import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let Pagename;
  switch (window.location.pathname) {
    case "/":
      Pagename = "Home";
      break;
    case `/PlayerPage/`:
      Pagename = "Player profile";
      break;
    case "/AddPlayer":
      Pagename = "Add Player";
  }

  const [pageName, setPageName] = useState<string>();
  const switchName = () => {};

  return (
    <div className="nav">
      <NavLink to={"/"} className="logo">
        <img className="img--logo--top" alt="Logo--top" />
        <img className="img--logo--bottom" alt="Logo--bottom" />
      </NavLink>
      <div className="nav__pagename  type--poppins type--wgt--medium">
        {pageName}
      </div>
      <NavLink
        to={"/AddPlayer"}
        className="nav__add btn type--poppins type--wgt--medium "
      >
        Add player
      </NavLink>
    </div>
  );
};
export default Nav;
