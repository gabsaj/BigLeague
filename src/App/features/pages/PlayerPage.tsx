import React from "react";
import PlayerService from "../../services/playerService";
import { Player } from "../../types/Player";
import Nav from "../components/Nav";
interface Props {
  players: Player[];
}

const PlayerPage: React.FC<Props> = ({ players }) => {
  return (
    <div className="App">
      <Nav />

      <div className="main__layout">
        {players.map((player) => (
          <div className="profile mt--30">
            <div className="card__imgContainer">
              <div className="img--profile"></div>
              <div className="card__flag"></div>
            </div>
            <div className="card__name mt--30">{player.name}</div>
            <div className="card__nickname mt--30">{player.nickname}</div>
            <div className="card__country mt--30">{player.country}</div>
            <div className="card__earnings mt--30">{player.earnings}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PlayerPage;
