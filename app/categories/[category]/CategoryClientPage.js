'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CategoryClientPage({ category, recipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [nutritionMap, setNutritionMap] = useState({}); // 🆕 key: recipe._id, value: nutrition data

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔁 Fetch nutrition info for visible recipes
  useEffect(() => {
    const fetchNutritionForRecipes = async () => {
      const toFetch = filteredRecipes.filter((r) => !nutritionMap[r._id]);

      for (const recipe of toFetch) {
        try {
          const res = await fetch('/api/analyzeNutrition', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients: recipe.ingredients }),
          });

          const data = await res.json();
          setNutritionMap((prev) => ({ ...prev, [recipe._id]: data }));
        } catch (error) {
          console.error('Nutrition fetch error:', error);
        }
      }
    };

    if (filteredRecipes.length > 0) {
      fetchNutritionForRecipes();
    }
  }, [filteredRecipes]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold capitalize mb-6">{category}</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredRecipes.map((r) => (
            <div key={r._id} className="flex flex-col items-stretch">
              <Link href={`/recipe/${r._id}`}>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition cursor-pointer flex-1">
                  <h2 className="text-xl font-semibold mb-1">{r.title}</h2>
                  <p className="text-sm text-gray-700 mb-2">Serves: {r.serves}</p>

                  <div className="text-sm text-gray-700">
                    <p className="font-medium">Ingredients:</p>
                    <ul className="list-disc list-inside mb-2">
                      {r.ingredients.slice(0, 3).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                      {r.ingredients.length > 3 && <li>...</li>}
                    </ul>

                    <p>
                      <span className="font-medium">Instructions:</span>{' '}
                      {r.instructions.slice(0, 100)}...
                    </p>

                    {/* 🍽 Nutrition Info */}
                    {nutritionMap[r._id] ? (
                      <div className="mt-3 text-xs text-gray-600 border-t pt-2">
                        <p>🧬 <strong>Calories:</strong> {nutritionMap[r._id].calories}</p>
                        <p>🥑 <strong>Fat:</strong> {nutritionMap[r._id].fat}</p>
                        <p>🍞 <strong>Carbs:</strong> {nutritionMap[r._id].carbs}</p>
                        <p>🥩 <strong>Protein:</strong> {nutritionMap[r._id].protein}</p>
                      </div>
                    ) : (
                      <p className="text-gray-400 text-xs mt-2">Fetching nutrition info...</p>
                    )}
                  </div>
                </div>
              </Link>

              {/* 👤 Author */}
              {r.userName && (
                <div className="flex items-center gap-2 mt-2 px-2">
                  {r.userImage ? (
                    <img
                      src={r.userImage}
                      alt={r.userName}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-300" />
                  )}
                  <p className="text-sm text-gray-600">by {r.userName}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
