import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const productSchema = new Schema({
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  gender: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    rate: { type: Number, default: 0 },
    count: { type: Number, required: true }
  }
})




export default model("products", productSchema);