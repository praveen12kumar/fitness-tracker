import Food from "../models/food.model.js";

const getFood = async (req, res)=>{
    try {
        const food = await Food.find({});

        if(!food){
            return res.status(404).json({
                message:"food not found",
            })
        }

        res.status(201).json({
            message:"food found",
            data: food
        })
        
    } catch (error) {
        res.status(404).json({message: "Can not find food", error})
    }
}

const addFood = async (req, res)=>{
    try{
        const {foodName, calories, proteins, carbohydrates, fats} = req.body;
        
        if(!foodName || !calories || !proteins || !carbohydrates || !fats){
        return res.status(404).json({
            message:"Please fill out all the required fields"
        })
    }

    const food = await Food.create({
        foodName,
        calories,
        proteins,
        carbohydrates,
        fats
    });

    res.status(201).json({
        message: "Food Item added successfully",
        data: food
    })
    }
    catch(error){
        res.status(404).json({message:"Food Item could not be created"})
    }
}


const deleteFood = async (req, res) => {
    try{
        let food = await Food.findById(req.params.id);

        if(!food){
            return res.status(404).json({message:"Food not found"})
        }

        food = await Food.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: "Delete Food",
            data: food
        });
    }
    catch(error){
        res.status(404).json({message:"Food could not be deleted"})
    }
}


export {
    getFood,
    addFood,
    deleteFood
}

