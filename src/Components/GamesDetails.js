import React from "react";
import { useParams } from "react-router-dom";
import { gamesData } from "../GamesData";
import "./Games.css";
import Footer from "./Footer";

const GamesDetails = () => {
  const { title } = useParams();
  const selected = gamesData.find((game) => game.title === title);

  return (
    <div>
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
                    className="nav-link active"
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
            <div>
              <form className="d-flex" role="search">
                <input
                  className="searchBar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </nav>
      {selected && (
        <div className="container-fluid containerGamesDetails">
          <div className="row">
            <div className="col-lg-4">
              <img
                src={selected.image}
                className="card-img-top imgGamesDetails"
                alt="..."
              />
            </div>

            <div className="col-lg-6 info">
              <h2 className="title">{selected.title}</h2>
              <div className="information">
                <span className="details">Platforms:</span>
                <br />

                <ul>
                  {selected.platforms.map((platforms, index) => (
                    <li className="ingredients" key={index}>
                      {platforms}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="details">Genre :</span>
              <span>&nbsp;{selected.genre}</span>
              <br /> <br />
              <span className="details">Release Date :</span>
              <span>&nbsp;{selected.release_date}</span>
              <br /> <br />
              <span className="details">Publisher :</span>
              <span>&nbsp;{selected.publisher}</span>
              <br /> <br />
              <span className="details">Developer :</span>
              <span>&nbsp;{selected.developer}</span>
              <br /> <br />
              <span className="details">rating :</span>
              <span>&nbsp;{selected.rating}</span>
            </div>
            <div className="col-lg-2">
              {" "}
              <img
                src="https://media.tenor.com/EtSxmQ8JUyYAAAAi/playstation-controler.gif"
                className="rounded float-start animation"
                alt="..."
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GamesDetails;
