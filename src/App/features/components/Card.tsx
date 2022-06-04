import React from "react";
import { NavLink } from "react-router-dom";
import { Player } from "../../types/Player";

interface Props {
  players: Player[];
}

const Card: React.FC<Props> = (props) => {
  const { players } = props;
  return (
    <div className="cards__container">
      {players.map((player) => (
        <NavLink
          to={`/PlayerPage/${player.id}`}
          className="card"
          key={player.id}
        >
          <div className="card__imgContainer">
            <div className="img--profile"></div>
            <div className="card__flag"></div>
          </div>
          <div className="card__name">{player.name}</div>
          <div className="card__nickname">{player.nickname}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
