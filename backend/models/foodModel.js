import mongoose from "mongoose";

// Mô tả thuộc tính có trong food
const foodSchema = new mongoose.Schema({ 
    name: {type: String, required: true}, 
    description: {type: String, required: true} , 
    price: {type: Number, required: true}, 
    image: {type: String, required: true},
    category: {type: String, required: true}
})

// Tạo mô hình (models) dựa trên schema
const foodModel = mongoose.models.food ||mongoose.model("food", foodSchema)
export default foodModel