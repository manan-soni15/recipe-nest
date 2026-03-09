import dbConnect from "@/lib/mongodb";
import Recipe from "@/models/Recipe";
import { getAuth } from "@clerk/nextjs/server"; // ✅ Only getAuth needed

export async function POST(req) {
  try {
    const { userId } = getAuth(req); // ✅ Still validate user is logged in

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await req.json();
    const { title, category, ingredients, instructions, imageUrl, serves } = body;

    // Basic validation
    if (!title || !category || !ingredients || !instructions || !serves) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    await dbConnect();

    const newRecipe = new Recipe({
      title,
      category,
      ingredients,
      instructions,
      imageUrl: imageUrl || "",
      userId, // ✅ Just store userId
      serves,
    });

    await newRecipe.save();

    return new Response(JSON.stringify({ message: "Recipe added successfully" }), { status: 201 });
  } catch (error) {
    console.error("API ERROR:", error);
    return new Response(JSON.stringify({ error: "Failed to add recipe" }), { status: 500 });
  }
}
