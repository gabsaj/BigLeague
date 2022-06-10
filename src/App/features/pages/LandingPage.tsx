import { useState, useEffect } from "react";
import { Player } from "../../types/Player";
import Card from "../components/Card";
import Nav from "../components/Nav";
import PlayerService from "../../services/playerService";
import { Link } from "react-router-dom";

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
  });

  return (
    <div className="App">
      <Nav />

      <div className="main__layout">
        <div className="main__layout__title type--bangers type--wgt--regular py--80">
          featured players
        </div>
        <div className="filter">
          <div className="sort type--poppins type--wgt--regular">
            Sort
            <i className="icon icon--base icon--sort"></i>
          </div>
          <div className="search type--poppins type--wgt--regular">
            <i className="icon icon--base icon--search"></i>
            <input
              onChange={(event) => handleSearch(event)}
              className="input"
            ></input>
          </div>
        </div>

        <div className="card__container mb--40">
          <Link to={`/not-found`} className="card " key="1">
            <div className="card__imgContainer">
              <div className="card__img"></div>
              <div className="card__flag"></div>
            </div>
            <div className="card__name type--bangers type--wgt--regular">
              PlayerUnknown
            </div>
            <div className="card__property ">NoNickname</div>
          </Link>
          {playersList.filter(filterSearch).map((player) => (
            <Card player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
