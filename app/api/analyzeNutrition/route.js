export async function POST(req) {
  try {
    const { ingredients } = await req.json();

    // Join ingredients array into a single string with line breaks
    const ingredientList = ingredients.join("\n");

    const params = new URLSearchParams();
    params.append("ingredientList", ingredientList);
    params.append("includeNutrition", "true");

    const response = await fetch(
      `https://api.spoonacular.com/recipes/parseIngredients?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spoonacular error:", errorText);
      return new Response(
        JSON.stringify({ error: "Spoonacular fetch failed" }),
        { status: response.status }
      );
    }

    const data = await response.json();

    // Aggregate nutrient values
    let totalCalories = 0,
      totalFat = 0,
      totalCarbs = 0,
      totalProtein = 0;

    for (const item of data) {
      const nutrients = item.nutrition?.nutrients || [];

      for (const n of nutrients) {
        const name = n.name.toLowerCase();
        if (name === "calories") totalCalories += n.amount;
        if (name === "fat") totalFat += n.amount;
        if (name === "carbohydrates") totalCarbs += n.amount;
        if (name === "protein") totalProtein += n.amount;
      }
    }

    return new Response(
      JSON.stringify({
        calories: `${totalCalories.toFixed(2)} kcal`,
        fat: `${totalFat.toFixed(2)} g`,
        carbs: `${totalCarbs.toFixed(2)} g`,
        protein: `${totalProtein.toFixed(2)} g`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
  
}
