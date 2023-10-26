import express from 'express';
import connectDB from './data/db.js';
import {config} from "dotenv";
import exerciseRouter from './routes/exerciseRouter.js';
import foodRouter from './routes/foodRouter.js';
import goalRouter from './routes/goalRouter.js';
import { errorMiddleware } from './middlewares/error.js';
import cors from "cors"
import helmet from "helmet";
import colors from "colors";

config();
const PORT = process.env.PORT || 3000;

const app = express();

// connect to database server
connectDB();



//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended:false}))


//set Routes
app.use('/api/v1/exercises', exerciseRouter);
app.use('/api/v1/foods', foodRouter);
app.use('/api/v1/goals', goalRouter);



// using error middleware
app.use(errorMiddleware);


app.use((req, res)=>{
    res.status(404).json({error:"Route not found"});
})




app.listen(PORT, (req, res) =>{
    console.log(`listening on port: ${PORT}`); 
});