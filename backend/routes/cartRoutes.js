import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js'; //importamos las funciones de cartController
import authUser from '../middleware/auth.js';



const cartRouter = express.Router(); //creamos una constante que almacenara la funcion de Router

cartRouter.post('/get', authUser, getUserCart) //creamos una ruta que recibe un post y llama a la funcion getUserCart
cartRouter.post('/add', authUser, addToCart)    //creamos una ruta que recibe un post y llama a la funcion addToCart
cartRouter.post('/update', authUser, updateCart)   //creamos una ruta que recibe un post y llama a la funcion updateCart 

export default cartRouter;
