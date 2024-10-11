import mongoose, { model, Schema } from 'mongoose';
import { TIngredient } from './Ingredient.interface';

const ingredientSchema: Schema = new mongoose.Schema<TIngredient>({
  name: {
    type: String,
    required: [true, 'Ingredient name is required.'],
  },
  isDeleted: {
    type: Boolean,
    default: false, // Default to false if not provided
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
  },
});

export const Ingredient = model<TIngredient>('Ingredient', ingredientSchema);