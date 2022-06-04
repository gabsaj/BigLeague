import { count } from "console";
import React, { useState } from "react";
import { idText } from "typescript";
import { v4 as id } from "uuid";
import PlayerService from "../../services/playerService";
import { Player } from "../../types/Player";
import Nav from "../components/Nav";

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [totalEarnings, setTotalEarnings] = useState<number>();
  const playerService = new PlayerService();

  const handleSubmit = async () => {
    try {
      const response = await playerService.createPlayer({
        name: playerName,
        country: country,
        nickname: nickname,
        id: id(),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(playerName, country, nickname, totalEarnings);
  return (
    <div className="App">
      <Nav />
      <div className="main__layout">
        <div className="property__container">
          <div className="property mt--30">
            <div className="property__title">Name</div>
            <input
              type="text"
              onChange={(event) => setPlayerName(event.target.value)}
              placeholder="Name"
              className="property__input input"
            ></input>
          </div>
          <div className="property  mt--30">
            <div className="property__title">Country</div>
            <input
              type="text"
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Country"
              className="property__input input"
            ></input>
          </div>
          <div className="property  mt--30">
            <div className="property__title">Nickname</div>
            <input
              type="text"
              onChange={(event) => setNickname(event.target.value)}
              placeholder="Nickname"
              className="property__input input"
            ></input>
          </div>
          <div className="property  mt--30">
            <div className="property__title">Total Earnings</div>
            <input
              type="number"
              onChange={(event) => setTotalEarnings(Number(event.target.value))}
              placeholder="Total earnings"
              className="property__input input"
            ></input>
          </div>
          <div className="uploads__container  mt--30">
            <div className="profile__photo">
              <div className="property__title">Profile photo</div>
              <div className="profile__photo__circle">
                <i className="icon--upload"></i>
              </div>
            </div>
            <div className="profile__photo">
              <div className="property__title">Profile photo</div>

              <div className="profile__photo__circle">
                <i className="icon--upload"></i>
              </div>
            </div>
          </div>
          <button onClick={() => handleSubmit()} className="btn  mt--30">
            Add player
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddPlayer;
