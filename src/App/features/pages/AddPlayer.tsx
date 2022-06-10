import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, Flip } from "react-toastify";
import { v4 as id } from "uuid";
import PlayerService from "../../services/playerService";
import Nav from "../components/Nav";

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [totalEarnings, setTotalEarnings] = useState<number>();
  const playerService = new PlayerService();

  const handleSubmit = async () => {
    if (playerName !== "" && country !== "" && nickname !== "") {
      await playerService.createPlayer({
        name: playerName,
        country: country,
        nickname: nickname,
        id: id(),
        earnings: totalEarnings ? totalEarnings : null,
      });
      toast.success("Player created.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        transition: Flip,
        theme: "dark",
      });
    } else {
      toast.error("Failed to create a player.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        transition: Flip,
        theme: "dark",
      });
    }
  };
  return (
    <div className="App">
      <Nav />
      <Link to={"/"} className="back type--poppins type--wgt--regular">
        <div className="btn btn--back">
          <i className="icon icon--md icon--back"></i>
        </div>
        <div>Back</div>
      </Link>
      <div className="main__layout">
        <div className="main__layout__title type--bangers type--wgt--regular py--80">
          Add new player
        </div>
        <div className="property__container">
          <div className="property mt--32">
            <div className="property__title type--bangers type--wgt--regular mb--6">
              Name
            </div>
            <input
              type="text"
              onChange={(event) => setPlayerName(event.target.value)}
              placeholder="Name"
              className="property__input input type--poppins type--wgt--regular"
            ></input>
          </div>
          <div className="property  mt--32">
            <div className="property__title type--bangers type--wgt--regular mb--6">
              Country
            </div>
            <input
              type="text"
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Country"
              className="property__input input type--poppins type--wgt--regular"
            ></input>
          </div>
          <div className="property  mt--32">
            <div className="property__title type--bangers type--wgt--regular mb--6">
              Nickname
            </div>
            <input
              type="text"
              onChange={(event) => setNickname(event.target.value)}
              placeholder="Nickname"
              className="property__input input type--poppins type--wgt--regular"
            ></input>
          </div>
          <div className="property  mt--32">
            <div className="property__title type--bangers type--wgt--regular mb--6">
              Total Earnings
            </div>
            <input
              type="number"
              onChange={(event) => setTotalEarnings(Number(event.target.value))}
              placeholder="Total earnings"
              className="property__input input type--poppins type--wgt--regular"
            ></input>
          </div>
          <div className="uploads__container  mt--32">
            <div className="profile__photo">
              <div className="property__title--upload type--bangers type--wgt--regular mb--6">
                Profile photo
              </div>
              <div className="profile__photo__circle">
                <i className="icon  icon--base icon--upload"></i>
              </div>
            </div>
            <div className="profile__photo">
              <div className="property__title--upload type--bangers type--wgt--regular mb--6">
                Profile photo
              </div>

              <div className="profile__photo__circle">
                <i className="icon icon--base icon--upload"></i>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleSubmit()}
            className="btn btn--submit  mt--32 type--poppins type--wgt--medium "
          >
            Add player
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddPlayer;
