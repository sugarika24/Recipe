// src/components/RecipeEditor.js
import React, { useState } from 'react';

const RecipeEditor = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [''],
    instructions: '',
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = recipe.ingredients.map((ingredient, i) => 
      i === index ? value : ingredient
    );
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const removeIngredient = (index) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe saved:', recipe);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Recipe Name</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Recipe Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                placeholder={`Ingredient ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeIngredient(index)}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Ingredient
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Instructions</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Recipe Instructions"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeEditor;
