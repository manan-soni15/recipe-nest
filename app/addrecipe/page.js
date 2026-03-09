"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // for App Router

export default function AddRecipe() {
  const { user } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    serves: "", // ✅ Added field
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const recipe = {
      ...formData,
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
      serves: Number(formData.serves), // ✅ Convert to number
      userId: user?.id || "admin",
    };

    try {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (res.ok) {
        alert("Recipe added successfully!");
        router.push("/");
      } else {
        const data = await res.json();
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-[#fff9ec] mt-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-[#1F2F1F]">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded bg-[#fff9ec] font-normal"
        >
          {formData.category === "" && (
            <option value="" disabled>
              Select Category
            </option>
          )}
          <option value="Starters">Starters</option>
          <option value="Main Course">Main Course</option>
          <option value="Desserts">Desserts</option>
          <option value="Shakes and Beverages">Shakes and Beverages</option>
          <option value="Salads">Salads</option>
          <option value="Soups">Soups</option>
          <option value="Chutneys, Pickle & Dips">Chutneys, Pickle & Dips</option>
          <option value="Breads">Breads</option>
        </select>

        <input
          type="number"
          name="serves"
          placeholder="How many people it serves"
          value={formData.serves}
          onChange={handleChange}
          required
          min={1}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <textarea
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          value={formData.ingredients}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5A6D57] text-white p-3 rounded hover:bg-[#4e5f4d] transition"
        >
          {loading ? "Adding..." : "Add Recipe"}
        </button>
      </form>
    </div>
  );
}

