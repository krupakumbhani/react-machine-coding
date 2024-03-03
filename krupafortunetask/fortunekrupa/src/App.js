import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetailPage from './components/RecipeDetailPage';
import RecipeForm from './components/RecipeForm';
import EditRecipeForm from './components/EditRecipeForm'; 
import { RecipeProvider } from './context/RecipeContext';
import './App.css';
const App = () => {
  return (
    <Router>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} /> 
        </Routes>
      </RecipeProvider>
    </Router>
  );
};

export default App;
