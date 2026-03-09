import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // array of strings
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '', // optional image URL
  },
  userId: {
    type: String,
    default: null, // later you can link this to Clerk user ID
  },
  userName: {
    type: String,
    default: '',
  },
  userImage: {
    type: String,
    default: '',
  },
  serves: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);
