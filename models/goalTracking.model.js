import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    goalName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    targetDate:{
        type:Date,
        required:true,
    },
    targetCalories:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["InProgress", "Achieved", "Abandoned"],
        default:"InProgress",
        required:true,
    }
},{
    timestamps:true,
});

const Goal = mongoose.model('Goal', GoalSchema);

export default Goal;
