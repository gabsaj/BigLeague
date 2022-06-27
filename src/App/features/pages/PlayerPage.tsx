import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import PlayerService from "../../services/playerService";
import { Player } from "../../types/Player";
import Nav from "../components/Nav";
import PlayerDetails from "../components/PlayerDetails";

const initialValues: Player = {
  name: "",
  nickname: "",
  country: "",
  id: "",
  earnings: null,
};

const PlayerPage = () => {
  const [player, setPlayer] = useState<Player>(initialValues);

  const playerService = new PlayerService();
  const params = useParams();

  const fetchPlayer = async () => {
    try {
      if (params.playerId) {
        const response = await playerService.fetchPlayerById(params.playerId);
        setPlayer(response);
      }
    } catch (error) {
      toast.error("Failed to find a player.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
        transition: Flip,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    <div>
      <Nav />
      <Link to={"/"} className="back type--poppins type--wgt--regular">
        <div className="btn btn--back">
          <i className="icon icon--md icon--back"></i>
        </div>
        <div className="ml--16">Back</div>
      </Link>
      <div className="main__layout">
        <PlayerDetails player={player} />
      </div>
    </div>
  );
};
export default PlayerPage;
