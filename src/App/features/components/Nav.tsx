import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [pageName, setPageName] = useState<string>("");

  const switchName = () => {
    switch (window.location.pathname) {
      case "/":
        setPageName("Home");
        break;
      case "/player-page/":
        setPageName("Player profile");
        break;
      case "/add-player":
        setPageName("Add Player");
        break;
    }
  };

  useEffect(() => {
    switchName();
  });

  return (
    <div className="nav">
      <NavLink to={"/"} className="logo">
        <img className="nav__logo--top" alt="Logo--top" />
        <img className="nav__logo--bottom" alt="Logo--bottom" />
      </NavLink>
      <div className="nav__pagename  type--poppins type--wgt--medium">
        {pageName}
      </div>
      <NavLink
        to={"/add-player"}
        className="nav__add btn type--poppins type--wgt--medium "
      >
        Add player
      </NavLink>
    </div>
  );
};
export default Nav;
