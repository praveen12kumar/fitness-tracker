import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true,
    },
    calories:{
        type:Number,
        required:true,
    },
    proteins:{
        type:Number,
        required:true,
    },
    carbohydrates:{
        type:Number,
        required:true,
    },
    fats:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
});

const Food = mongoose.model('Food', FoodSchema);

export default Food;

