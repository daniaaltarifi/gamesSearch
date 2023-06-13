import React, { useState } from "react";
import { gamesData } from "../GamesData";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Games.css";
const Games = () => {
  const [filteredList, setFilteredList] = useState(gamesData);
  const [hide,setHide]=useState(true)
  let updatedList;
  // Search
  const search = (event) => {
    let query= event.target.value;
    updatedList = gamesData.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredList(updatedList);
    setHide(!hide)
  };

  return (
    <>
      <nav>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand navBarColor" href="#">
              MasterPlay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className=" nav-link active "
                    aria-current="page"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link navBarColor" href="#">
                    Gamer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navBarColor" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navBarColor" href="#">
                    Esport
                  </a>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="searchBar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={search}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </nav>
      <div className={hide?"introduction":"hide"}>
      <img src="https://html.nkdev.info/monsterplay/assets/images/studio/bg-banner.jpg" className="img-fluid backgroundGame" alt="..." />
      <div className="container infoAboutWeb">
      <p className="bigTitle">MasterPlay</p>
      <p className="brief">  is an online platform that offers information, reviews, and services related to video games. It caters to gamers of all ages and provides features such as game reviews, news, and guides. </p>
      <button type="button" className="btn btn-success btnReadMre">Read More</button>
</div>
 
      </div>
      

   
      <div className="container text-center">
        <div className="row">
          {filteredList.map((game, index) => (
            <div className="col" key={index}>
              <div className="card boxGames">
                <img
                  src={game.image}
                  className="img_games"
                  alt="..."
                  height="300px"
                />
                <div className="card-body">
                  <h5 className="card-title gamesTitle">{game.title}</h5>
                  <button type="button" className="btn btn-success btnGames">
                    <Link
                      to={`/details/${game.title}`}
                      className="link linkGames"
                    >
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    <Contact hideen={hide}/>
      <Footer />
    </>
  );
};

export default Games;
