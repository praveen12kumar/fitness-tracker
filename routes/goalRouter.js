import express from 'express';
import { addGoal, getGoal, deleteGoal } from '../controller/goalController.js';
const goalRouter = express.Router();


goalRouter.get('/all', getGoal);
goalRouter.post('/new', addGoal);
goalRouter.delete('/:id', deleteGoal);



export default goalRouter;