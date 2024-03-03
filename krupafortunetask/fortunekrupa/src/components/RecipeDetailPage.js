import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';


const RecipeDetailPage = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);
  console.log('All Recipes:', recipes, id);
  const navigate = useNavigate();
 
  const recipe = recipes.find(recipe => recipe.id === Number(id));

  if (!recipe) {
    return <div className="recipe-detail-container">Recipe not found!</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>Description: {recipe.description}</p>
      <p>Preparation Time: {recipe.preparationTime}</p>
      <ul>
      Ingredients:
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <Link to={`/edit-recipe/${recipe.id}`}>
        <button>Edit Recipe</button>
      </Link>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default RecipeDetailPage;
