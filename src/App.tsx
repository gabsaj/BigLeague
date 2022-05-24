import { useEffect, useState } from "react";
import "../src/styles/App.scss";
import { Player } from "./types/Player";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  const playersList = [
    {
      id: 1,
      name: "Name1",
      nickname: " Nick1",
    },
    {
      id: 2,
      name: "Name2",
      nickname: " Nick2",
    },
    {
      id: 3,
      name: "Name3",
      nickname: " Nick3",
    },
    {
      id: 1,
      name: "Name1",
      nickname: " Nick1",
    },
    {
      id: 2,
      name: "Name2",
      nickname: " Nick2",
    },
    {
      id: 3,
      name: "Name3",
      nickname: " Nick3",
    },
    {
      id: 1,
      name: "Name1",
      nickname: " Nick1",
    },
    {
      id: 2,
      name: "Name2",
      nickname: " Nick2",
    },
    {
      id: 3,
      name: "Name3",
      nickname: " Nick3",
    },
    {
      id: 1,
      name: "Name1",
      nickname: " Nick1",
    },
    {
      id: 2,
      name: "Name2",
      nickname: " Nick2",
    },
    {
      id: 3,
      name: "Name3",
      nickname: " Nick3",
    },
  ];

  const fetchPlayers = () => {
    setPlayers(playersList);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="App">
      <div className="nav">
        <div className="logo">Big League</div>
        <div className="nav__pageName">Home</div>
        <div className="nav__add btn">Add player</div>
      </div>

      <div className="main__layout">
        <div className="main__layout__title">featured players</div>
        <div className="filter">
          <div className="sort">
            Sort
            <i className="icon--sort"></i>
          </div>
          <div className="search">
            <i className="icon--search"></i>
            <input placeholder="Search..." className="input"></input>
          </div>
        </div>
        <div className="cards__container">
          {players.map((player) => (
            <div className="card">
              <div className="card__imgContainer">
                <div className="card__img"></div>
                <div className="card__flag"></div>
              </div>
              <div className="card__name">{player.name}</div>
              <div className="card__role">{player.nickname}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
