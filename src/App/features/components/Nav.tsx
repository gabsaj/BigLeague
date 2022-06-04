import { NavLink } from "react-router-dom";

const Nav = () => {
  let Pagename;
  switch (window.location.pathname) {
    case "/":
      Pagename = "Home";
      break;
    case "/PlayerPage":
      Pagename = "Player profile";
      break;
    case "/AddPlayer":
      Pagename = "Add Player";
  }

  return (
    <div className="nav">
      <NavLink to={"/"} className="logo">
        Big League
      </NavLink>
      <div className="nav__pagename">{Pagename}</div>
      <NavLink to={"/AddPlayer"} className="nav__add btn">
        Add player
      </NavLink>
    </div>
  );
};
export default Nav;
