import { useState, useEffect } from "react";
import { Player } from "../../types/Player";
import Card from "../components/Card";
import Nav from "../components/Nav";
import PlayerService from "../../services/playerService";

const LandingPage = () => {
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const playerService = new PlayerService();
  const [searchValue, setSearchValue] = useState<string>("");

  const fetchPlayers = async () => {
    try {
      const response = await playerService.getPlayers();
      setPlayersList(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filterSearch = (value: Player) => {
    if (searchValue === "") {
      return value;
    } else if (
      value.name.toLowerCase().includes(searchValue) ||
      value.name.toUpperCase().includes(searchValue) ||
      value.name.includes(searchValue)
    )
      return value;
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="App">
      <Nav />

      <div className="main__layout">
        <div className="main__layout__title">featured players</div>
        <div className="filter">
          <div className="sort">
            Sort
            <i className="icon--md icon--sort"></i>
          </div>
          <div className="search">
            <i className="icon--md icon--search"></i>
            <input
              onChange={(event) => handleSearch(event)}
              placeholder="Search..."
              className="input"
            ></input>
          </div>
        </div>
        <Card players={playersList} />
        {/* <>
          {playersList.filter(filterSearch).map(() => (
          ))}
        </> */}
      </div>
    </div>
  );
};

export default LandingPage;
