import { getAuth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/mongodb";
import Recipe from "@/models/Recipe";

export async function GET(req) {
  try {
    const { userId } = getAuth(req); //  Ensure middleware is enabled

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    await dbConnect();

    const recipes = await Recipe.find({ userId });

    return new Response(JSON.stringify(recipes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching recipes:", error.message, error.stack);

    return new Response(JSON.stringify({ error: "Failed to fetch recipes" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
