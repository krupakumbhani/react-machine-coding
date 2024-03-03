import React, { createContext, useState } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const editRecipe = (id, updatedRecipe) => {
    setRecipes(recipes.map(recipe => {
      if (recipe.id === id) {
        return {
          ...recipe,
          ...updatedRecipe
        };
      }
      return recipe;
    }));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe, editRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
