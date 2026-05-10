# RecipeNest 🍳
### Full-Stack Recipe Sharing Platform

RecipeNest is a modern full-stack recipe sharing platform where users can discover, create, and organize recipes through an intuitive and scalable interface.

The platform enhances the cooking experience with AI-powered nutritional insights and a hands-free cooking assistant using the Browser Speech API.

---

#  Features

-  Discover recipes across multiple categories
-  Create and share custom recipes
-  Categorize recipes for better organization
-  Real-time nutritional insights for each recipe
-  Hands-free cooking assistant using Browser Speech API
-  Secure user authentication with Clerk
-  Fully responsive modern UI
-  Fast and scalable architecture

---

#  Key Functionalities

##  Nutritional Insights
Integrated the Spoonacular API to provide:
- Calories
- Protein
- Carbohydrates
- Fats
- Ingredient-based nutritional analysis

This helps users make healthier and informed cooking decisions.

---

##  Hands-Free Cooking Mode

Implemented Browser Speech API functionality that:
- Reads step-by-step recipe instructions aloud
- Enables hands-free cooking
- Improves accessibility and user experience

---





#  Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/manan-soni15/recipe-nest.git
```

## 2️⃣ Navigate to Project Folder

```bash
cd recipenest
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Create Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
SPOONACULAR_API_KEY=your_spoonacular_api_key
```

---

## 5️⃣ Run Development Server

```bash
npm run dev
```

---

## 6️⃣ Open in Browser

```bash
http://localhost:3000
```

---



#  Future Enhancements

- AI Recipe Recommendations
- Meal Planner
- Grocery List Generator
- Save Favorite Recipes
- Recipe Rating & Reviews
- Video Recipe Support


---

# 📸 Highlights

✅ Full-stack scalable architecture  
✅ Responsive UI with Tailwind CSS  
✅ Real-time nutrition analysis  
✅ Speech-enabled cooking assistant  
✅ Secure authentication system  

---



