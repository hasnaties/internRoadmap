import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import profileRouter from './routers/profileRouter.js';


const app = express();
app.use(profileRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up at port: ${port}`);
})