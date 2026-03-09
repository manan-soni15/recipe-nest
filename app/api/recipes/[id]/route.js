import dbConnect from "@/lib/mongodb";
import Recipe from "@/models/Recipe";

export async function DELETE(request, { params }) {
  const { id } = params;

  await dbConnect();

  try {
    const deleted = await Recipe.findByIdAndDelete(id);
    if (!deleted) {
      return new Response(JSON.stringify({ error: "Recipe not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Recipe deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete recipe" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
