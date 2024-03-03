import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';


const RecipeForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [preparationTime, setPreparationTime] = useState(0);
  const [image, setImage] = useState(null); // Store the file object
  const [ingredients, setIngredients] = useState([]);
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      description,
      preparationTime,
      image: URL.createObjectURL(image), 
      ingredients,
    };
    addRecipe(newRecipe);
    navigate('/');
  };
  
  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="recipe-form-container">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Preparation Time:</label>
        <input type="number" value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} />
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} accept="image/*" /> {/* File input for image upload */}
        <label>Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeForm;
