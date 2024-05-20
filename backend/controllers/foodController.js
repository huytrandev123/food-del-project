import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req,res) => { 
    // save data in database
    let image_filename = `${req.file.filename}`
    
    // create variable "food" in db when post
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save()
        res.json({
            success: true,
            message: 'Food Added'
        })
    } catch (error) {
        console.log(error);
        res.json({success: false, message:'ErrorError'})
    }
}

export {addFood}