import express from 'express';  
import cors from 'cors';    
import 'dotenv/config' ;    
import connectDB from './config/mongodb.js'; //importamos la funcion de conexion a la base de datos
import { connect } from 'mongoose';
import connectCloudinary from './config/cloudinary.js'; //importamos la funcion de conexion a cloudinary
import userRouter from './routes/usrRoutes.js';
import productRouter from './routes/productsRoutes.js';


//APP  config

const app = express();     //Agregamos la funcion de express
const port = process.env.PORT || 9000;      //Agregamos el puerto de la aplicacion
connectDB();    //Agregamos la funcion de conexion a la base de datos
connectCloudinary();    //Agregamos la funcion de conexion a cloudinary

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product/',productRouter);

app.get('/', (req, res) => res.status(200).send('Hello World la api funciona desgraciaooo'));

app.listen(port, () => console.log(`El servidor se inicio en el puerto:${port}`));
