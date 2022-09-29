import mongoose from 'mongoose'

const Schema = mongoose.Schema

const catSchema = new Schema({
  name: String,
  age: Number,
  breed: String
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  cats: [catSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
