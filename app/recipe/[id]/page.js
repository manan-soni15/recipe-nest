import dbConnect from "@/lib/mongodb";
import Recipe from "@/models/Recipe";
import RecipeDetailClient from "./RecipeDetailClient"; // 👈 Create this file

export default async function RecipeDetail({ params }) {
  const { id } = params;

  await dbConnect();
  const recipe = await Recipe.findById(id).lean();

  if (!recipe) {
    return <div className="p-8">Recipe not found.</div>;
  }

  return <RecipeDetailClient recipe={JSON.parse(JSON.stringify(recipe))} />;
}
