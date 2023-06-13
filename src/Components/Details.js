import React from "react";
import NavBar from "./NavBar";

import { useParams } from "react-router-dom";
import { recipesList } from "../data";
import "./details.css";
import Footer from "./Footer";
const Details = () => {
  const { name } = useParams();
  const selected = recipesList.find((recipe) => recipe.name === name);

  return (
    <div>
      <NavBar/>
      {selected && (
        <div className="container-fluid">
          <h1 className="title">{selected.name}</h1>

          <div class="row">
            <div class="col-4">
              <img src={selected.image} className="card-img-top imgRecipes" alt="..." />
            </div>

            <div class="col-7 info">
              <ul>
                <h4>Ingredients:</h4>
                {selected.ingredients.map((ingredients, index) => (
                  <li className="ingredients" key={index}>
                    {ingredients}
                  </li>
                ))}
              </ul>
              <h4>Instructions:</h4>
              <p>{selected.instructions}</p>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Details;
