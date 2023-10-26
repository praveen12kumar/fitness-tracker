import express from "express";
const foodRouter = express.Router();
import { addFood, getFood, deleteFood } from "../controller/foodController.js";


foodRouter.get('/all', getFood);
foodRouter.post('/new', addFood);
foodRouter.delete('/:id', deleteFood);

export default foodRouter;