import express from "express";
const exerciseRouter = express.Router();

import {
    getAllExercises,
    addExercise,
    deleteExercise,
} from "../controller/exerciseController.js";



exerciseRouter.get('/all', getAllExercises);
exerciseRouter.post('/new', addExercise);
exerciseRouter.delete("/:id", deleteExercise);





export default exerciseRouter;