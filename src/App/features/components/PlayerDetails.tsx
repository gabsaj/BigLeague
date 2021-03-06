import React from "react";
import { Player } from "../../types/Player";

interface Props {
  player: Player;
}

const PlayerDetails: React.FC<Props> = (props) => {
  const { player } = props;
  return (
    <div className="profile mt--288 mb--64">
      <div className="profile__imgContainer">
        <div className="card__img--large"></div>
        <div className="profile__flag"></div>
      </div>
      <div className="profile__name type--bangers type--wgt--regular mt--32">
        {player.name}
      </div>
      <div className="profile__property mt--32 type--poppins type--wgt--regular">
        {player.nickname}
      </div>
      <div className="profile__property mt--32 type--poppins type--wgt--regular">
        {player.country}
      </div>
      <div className="profile__property mt--32 type--poppins type--wgt--regular">
        {player.earnings}
      </div>
    </div>
  );
};

export default PlayerDetails;
