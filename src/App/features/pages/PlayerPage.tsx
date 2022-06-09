import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerService from "../../services/playerService";
import { Player } from "../../types/Player";
import Nav from "../components/Nav";
import PlayerDetails from "../components/PlayerDetails";

const PlayerPage = () => {
  const initialValues: Player = {
    name: "",
    nickname: "",
    country: "",
    id: "",
    earnings: null,
  };
  const playerService = new PlayerService();
  const [player, setPlayer] = useState<Player>(initialValues);
  const params = useParams();
  console.log(params.playerId);
  const fetchPlayer = async () => {
    try {
      if (params.playerId) {
        const response = await playerService.fetchPlayerById(params.playerId);
        setPlayer(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPlayer();
  }, []);
  return (
    <div className="App">
      <Nav />

      <div className="main__layout">
        <PlayerDetails player={player} />
      </div>
    </div>
  );
};
export default PlayerPage;
