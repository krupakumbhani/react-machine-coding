// HomePage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';


const HomePage = () => {
  const { recipes, deleteRecipe } = useContext(RecipeContext);

  return (
    <div className="homepage-container">
      <h1>Recipes CRUD</h1>
      <Link to="/add-recipe">
        <button className="add-recipe-button">Add Recipe</button>
      </Link>
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <Link to={`/recipe/${recipe.id}`}>
              <div>
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <h2 className="recipe-name">{recipe.name}</h2>
              </div>
            </Link>
            <div className="edit-delete-buttons">
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              <Link to={`/edit-recipe/${recipe.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
