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


// all food list
const listFood = async (req,res) => { 
    // Show all food item and send them in response
    try {
        const foods = await foodModel.find({})
        res.json({success: true, data: foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: 'Error list food'})
    }
}

// remove food item
const removeFood = async (req,res) => { 
    try {
        // Find food item wanna delete
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, () => {}) // delete image from folder uploads
        await foodModel.findByIdAndDelete(req.body.id) // delete from database
        res.json({success:true, message: 'Food Remove'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: 'Error from delete'})
    }
}

export {addFood,listFood, removeFood}