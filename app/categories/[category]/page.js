import dbConnect from "@/lib/mongodb";
import Recipe from "@/models/Recipe";
import CategoryClientPage from "./CategoryClientPage";

export default async function CategoryPage({ params }) {
  const category = decodeURIComponent(params.category);
  const readableCategory = category.replace(/-/g, ' ');

  await dbConnect();

  const recipes = await Recipe.find({
    category: { $regex: new RegExp(readableCategory, 'i') },
  });

  return (
    <CategoryClientPage
      category={readableCategory}
      recipes={JSON.parse(JSON.stringify(recipes))}
    />
  );
}

  

