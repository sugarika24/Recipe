import React, { useState } from 'react';

const CreateRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [file, setFile] = useState(null); // Add file state

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Recipe created successfully!');
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold text-center mb-6">Create a Recipe</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Recipe Name */}
                    <div>
                        <label className="block text-gray-700">Recipe Name</label>
                        <input
                            type="text"
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            placeholder="Enter recipe name"
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg mt-1"
                            required
                        />
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-gray-700">Ingredients</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder="List the ingredients"
                            rows="4"
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg mt-1"
                            required
                        ></textarea>
                    </div>

                    {/* Instructions */}
                    <div>
                        <label className="block text-gray-700">Instructions</label>
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Describe the cooking steps"
                            rows="6"
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg mt-1"
                            required
                        ></textarea>
                    </div>

                    {/* File Input */}
                    <div>
                        <label className="block text-gray-700">Upload File</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Create Recipe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateRecipe;
