import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';


const EditRecipeForm = () => {
  const { id } = useParams();
  const { recipes, editRecipe } = useContext(RecipeContext); 
 
  const navigate = useNavigate();
  const recipe = recipes.find(recipe => recipe.id === Number(id));
  const [name, setName] = useState(recipe ? recipe.name : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [preparationTime, setPreparationTime] = useState(recipe ? recipe.preparationTime : 0);
  const [image, setImage] = useState(recipe ? recipe.image : '');
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      name,
      description,
      preparationTime,
      image,
      ingredients,
    };
    editRecipe(Number(id), updatedRecipe);
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="edit-recipe-form-container">
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={name} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={description}/>
        </div>
        <div>
          <label>Preparation Time:</label>
          <input type="number" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} placeholder={preparationTime} />
        </div>
        <div>
          <label>Image:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder={image}/>
        </div>
        <div>
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              placeholder={ingredient}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index] = e.target.value;
                setIngredients(newIngredients);
              }}
            />
          ))}
          <button type="button" onClick={() => setIngredients([...ingredients, ''])}>
            Add Ingredient
          </button>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
