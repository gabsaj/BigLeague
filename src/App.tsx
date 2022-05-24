import React from "react";
import "../src/styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="nav__logo">
          <i className="logo-top"></i>
          <i className="logo-bottom"></i>
        </div>
        <div className="nav__pageName">Home</div>
        <div className="nav__add btn">Add player</div>
      </div>

      <div className="main__layout">
        <div className="main__layout__title">featured players</div>
        <div className="filter">
          <div className="search">
            <i className="icon--search"></i>
            <input placeholder="Search..." className="input"></input>
          </div>
        </div>
        <div className="cards__container">
          <div className="card">
            <div className="card__imgContainer">
              <div className="card__img"></div>
              <div className="card__flag"></div>
            </div>
            <div className="card__name">Dodo</div>
            <div className="card__role">Carrier</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
