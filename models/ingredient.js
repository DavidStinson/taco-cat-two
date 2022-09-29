import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
  name: String
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema)

export {
  Ingredient
}