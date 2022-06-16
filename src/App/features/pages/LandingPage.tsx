/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Player } from "../../types/Player";
import Card from "../components/Card";
import Nav from "../components/Nav";
import PlayerService from "../../services/playerService";
import { toast, Flip } from "react-toastify";
const LandingPage = () => {
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const [initialLoad, setInitialLoad] = useState(6);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("");
  const playerService = new PlayerService();

  const handleLoadMore = () => {
    if (initialLoad >= 6) {
      setInitialLoad(initialLoad + 6);
    }
  };

  const fetchPlayers = async () => {
    try {
      const response = await playerService.getPlayers(
        `name`,
        initialLoad,
        sortDirection
      );
      setPlayersList(response);
    } catch (error) {
      toast.error("Failed to load players.", {
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

  const Players = (value: Player) => {
    const filterSearch = () => {
      if (searchValue === "") {
        return value;
      } else if (
        value.name.toLowerCase().includes(searchValue) ||
        value.name.toUpperCase().includes(searchValue) ||
        value.name.includes(searchValue)
      )
        return value;
    };

    return filterSearch();
  };
  const handleSort = () => {
    if (sortDirection === "") {
      setSortDirection("asc");
    }
    if (sortDirection === "asc") {
      setSortDirection("desc");
    }
    if (sortDirection === "desc") {
      setSortDirection("");
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [initialLoad, sortDirection]);

  return (
    <div className="App">
      <Nav />

      <div className="main__layout">
        <div className="main__layout__title type--bangers type--wgt--regular py--80">
          featured players
        </div>
        <div className="filter">
          <button
            onClick={handleSort}
            className="sort type--poppins type--wgt--regular"
          >
            Sort
            <i className="icon icon--base icon--sort"></i>
          </button>
          <div className="search type--poppins type--wgt--regular">
            <i className="icon icon--base icon--search"></i>
            <input
              onChange={(event) => handleSearch(event)}
              className="input"
            ></input>
          </div>
        </div>

        <div className="card__container my--40">
          {playersList.length === 0 ? (
            <div>No players</div>
          ) : (
            playersList
              .filter(Players)
              .map((player) => <Card key={player.id} player={player} />)
          )}
        </div>

        <button
          disabled={initialLoad > playersList.length ? true : false}
          onClick={handleLoadMore}
          className="btn btn--load my--40"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
