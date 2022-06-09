import React from "react";
import { NavLink } from "react-router-dom";
import { Player } from "../../types/Player";

interface Props {
  player: Player;
}

const Card: React.FC<Props> = (props) => {
  const { player } = props;
  return (
    <NavLink to={`/PlayerPage/${player.id}`} className="card" key={player.id}>
      <div className="card__imgContainer">
        <div className="img--profile"></div>
        <div className="card__flag"></div>
      </div>
      <div className="card__property">{player.name}</div>
      <div className="card__property">{player.nickname}</div>
    </NavLink>
  );
};

export default Card;
