"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function MyRecipes() {
  const { user } = useUser();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchRecipes = async () => {
      try {
        const res = await fetch(`/api/my-recipes`);
        if (!res.ok) {
          const text = await res.text(); // read raw body for debugging
console.error("Failed to fetch:", res.status, JSON.parse(text)?.error || text);

          throw new Error("Failed to fetch recipes");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Unexpected response:", data);
          setRecipes([]);
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [user]);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this recipe?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRecipes(recipes.filter((r) => r._id !== id));
      } else {
        alert("Failed to delete recipe");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("An error occurred");
    }
  };

  if (loading) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Recipes</h1>

      {recipes.length === 0 ? (
        <p>You haven't submitted any recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
            >
              <Link href={`/recipe/${recipe._id}`}>
                <div className="cursor-pointer">
                  <h2 className="text-xl font-semibold mb-2">
                    {recipe.title}
                  </h2>
                  <p className="text-sm text-gray-600">{recipe.category}</p>
                  <p className="text-sm mt-2">
                    <strong>Serves:</strong> {recipe.serves || "N/A"}
                  </p>
                </div>
              </Link>

              <div className="mt-4 flex gap-4">
                <Link href={`/edit-recipe/${recipe._id}`}>
                  <button className="text-blue-600 hover:underline">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
