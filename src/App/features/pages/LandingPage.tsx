import { useState, useEffect } from "react";
import { Player } from "../../types/Player";
import Card from "../components/Card";
import Nav from "../components/Nav";
import PlayerService from "../../services/playerService";
import { Link } from "react-router-dom";
import { toast, Flip } from "react-toastify";
const playersPerLoad = 6;
const LandingPage = () => {
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const [loadMore, setLoadMore] = useState(playersPerLoad);
  const playerService = new PlayerService();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleLoadMore = () => {
    setLoadMore(loadMore + playersPerLoad);
  };

  const fetchPlayers = async () => {
    try {
      const response = await playerService.getPlayers();
      setPlayersList(response);
    } catch (error) {
      toast.error("Failed load players.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
        transition: Flip,
        theme: "dark",
      });
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

  const playerNotFound = () => {
    toast.error("Player not found.", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 2000,
      transition: Flip,
      theme: "dark",
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

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

        <div className="card__container">
          <Link
            onClick={() => playerNotFound()}
            to={`/not-found`}
            className="card "
            key="1"
          >
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
        <button className="btn btn--load my--40">Load more</button>
      </div>
    </div>
  );
};

export default LandingPage;
