
import Exercise from "../models/exerciseModel.js";

// const jsonData = fs.readFileSync("../data/exercise.json", "utf8");
// console.log("jsonData", jsonData);
// const ExerciseData = JSON.parse(jsonData);


//seed Exercise 
// const seedExercises = async()=>{
//    try{
//     for(const exercise of ExerciseData){
//         const {exerciseName, duration} = exercise;
    
//         const newExercise = new Exercise({
//             exerciseName,
//             duration
//         })
    
//         await newExercise.save();
//         console.log(`New Exercise ${newExercise.exerciseName} seeded`);
//        }
//        console.log(`Database seeded Completely`); 
//    }
//    catch(error){
//     console.log(`Error seeding exercise Database`, error);
//    }
//    finally{
//     mongoose.disconnect();
//    }
// }


const getAllExercises = async(req, res)=>{
    try{
        const exercises = await Exercise.find({});
   
        if(exercises){
            return res.status(201).json({
                message: "All Exercise", 
                data:exercises
            });
        }
        
        res.status(400).json({message: "No Exercise found"})
        
    }
    catch(error){
        res.status(500).json({error:"Failed to get the exercises"});
    }
   
};


const addExercise = async(req, res)=>{
    const { exerciseName, duration} = req.body;

    if(!exerciseName || !duration){
        return res.status(404).json({message:"Enter exercise name or duration"})
    }
    const exercise = await Exercise.create({
        exerciseName, duration
    })

    res.status(201).json({
        success:true,
        message:"Exercise added successfully",
        data: exercise
    })
};


const deleteExercise =async(req, res)=>{
    try {
        let exercise = await Exercise.findById(req.params.id)

        if(!exercise){
            return res.status(404).json({message:"Exercise not found"})
        }
        exercise = await Exercise.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: "Delete Exercise",
            data: exercise
        });
    } catch (error) {
        res.status(404).json({message:"Error deleting Exercise"});
    }
};



export {
    getAllExercises,
    addExercise,
    deleteExercise,
}