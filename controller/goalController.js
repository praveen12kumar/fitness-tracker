import Goal  from "../models/goalTracking.model.js";

const getGoal = async(req, res)=>{
    try {
        const goals = await Goal.find({});

        if(!goals){
            return res.status(404).json({
                message:"No goals found!"
            })
        }

        res.status(201).json({
            message:"Goal found",
            data: goals
    })

    } catch (error) {
        res.status(500).json({
            messsage:"Failed to find goal data",
        })
    }
}

const addGoal = async(req, res)=>{
    try {
        const {goalName, description, targetDate, targetCalories, status} = req.body;

        if(!goalName || !description || !targetDate || !targetCalories || !status){
            return res.status(404).json({
                message:"Please provide all the required fields"
            })
        }

        // const newGoal = new Goal({goalName, description, targetDate, targetCalories, status});
       
        // const goal = await newGoal.save();

        const goal = await Goal.create({
            goalName, 
            description,
            targetDate, 
            targetCalories, 
            status
        })

        res.status(200).json({
            message:"Goal created successfully",
            data:goal
        })
       
    } catch (error) {
        res.status(404).json({message:"Goal Item could not be created", error})
    }
};

const deleteGoal = async (req, res) => {
    try{
        let goal = await Goal.findById(req.params.id);

        if(!goal){
            return res.status(404).json({
                message:"Goal not found",
            })
        }

        goal = await Goal.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: "Delete Goal",
            data: goal
        });
    }
    catch(error){
        res.status(404).json({message:"Goal could not be deleted"})
    }
}


export {getGoal, addGoal, deleteGoal}