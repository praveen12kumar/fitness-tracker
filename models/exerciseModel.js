import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    exerciseName:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
}
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
