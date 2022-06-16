import React from "react";
import { NavLink } from "react-router-dom";
import { Player } from "../../types/Player";

interface Props {
  player: Player;
}

const Card: React.FC<Props> = (props) => {
  const { player } = props;
  return (
    <NavLink
      to={`${
        player.name === "Unknown" ? `/not-found` : `/player-page/${player.id}`
      }`}
      className="card"
      key={player.id}
    >
      <div className="card__imgContainer">
        <div className="card__img"></div>
        <div className="card__flag"></div>
      </div>
      <div className="card__name type--bangers type--wgt--regular">
        {player.name}
      </div>
      <div className="card__property ">{player.nickname}</div>
    </NavLink>
  );
};

export default Card;
