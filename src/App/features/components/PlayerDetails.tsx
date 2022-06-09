import React from "react";
import { Player } from "../../types/Player";

interface Props {
  player: Player;
}

const PlayerDetails: React.FC<Props> = (props) => {
  const { player } = props;
  return (
    <div className="profile mt--30">
      <div className="card__imgContainer">
        <div className="img--profile"></div>
        <div className="card__flag"></div>
      </div>
      <div className="card__name mt--30">{player.name}</div>
      <div className="card__property mt--30">{player.nickname}</div>
      <div className="card__property mt--30">{player.country}</div>
      <div className="card__property mt--30">{player.earnings}</div>
    </div>
  );
};

export default PlayerDetails;
