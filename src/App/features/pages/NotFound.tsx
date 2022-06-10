import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const NotFound = () => {
  return (
    <div className="app">
      <Nav />
      <Link to={"/"} className="back type--poppins type--wgt--regular">
        <div className="btn btn--back">
          <i className="icon icon--md icon--back"></i>
        </div>
        <div>Back</div>
      </Link>
      <div className="main__layout">
        <div className="profile">
          <img className="img--404 my--32" alt="404" />
          <img className="img--text" alt="Player not found" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
