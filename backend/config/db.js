// mongodb+srv://trandoquanghuy123:060399@food-del-project.glnhvcg.mongodb.net/food-del
import mongoose from "mongoose";

export const connectDB = async () => { 
    await mongoose.connect('mongodb+srv://trandoquanghuy123:060399@food-del-project.glnhvcg.mongodb.net/food-del')
    .then (() => console.log('DB connected'))
    .catch((err) => console.log('Cant connect DB'))
}