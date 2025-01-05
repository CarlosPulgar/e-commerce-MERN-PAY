import userModel from "../models/userModels.js";


// agregar un producto al carrito del usuario
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body; //extraemos el userId, itemId y size del body

    const userData = await userModel.findById(userId); //buscamos al usuario por su id
    let cartData = await userData.cartData; //extraemos el carrito del usuario

    if (cartData[itemId]) {//si el producto ya esta en el carrito
      
      if (cartData[itemId][size]) { //si el producto ya esta en el carrito en esa talla
                cartData[itemId][size] += 1; //aumentamos la cantidad en 1
      } else {
        cartData[itemId][size] = 1; //si no esta en esa talla, lo agregamos
      }
    } else {
      cartData[itemId] = {}; //si no esta en el carrito, lo agregamos
      cartData[itemId][size] = 1; //agregamos la talla y la cantidad
    }
    await userModel.findByIdAndUpdate(userId, { cartData }); //actualizamos el carrito del usuario
    res.json({ success: true, message: "Producto agregado al carrito" }); //mandamos un mensaje de exito

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "No se pudo agregar el producto al carrito",
    }); //mandamos un mensaje de error
  }
};

// actualizar la cantidad de un producto en el carrito del usuario

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body; //extraemos el userId, itemId, size y quantity del body

    const userData = await userModel.findById(userId); //buscamos al usuario por su id
    let cartData = await userData.cartData; //extraemos el carrito del usuario

    cartData[itemId][size] = quantity; //actualizamos la cantidad del producto en el carrito

    await userModel.findByIdAndUpdate(userId, {cartData}); //actualizamos el carrito del usuario
    res.json({ success: true, message: "Carrito actualizado" }); //mandamos un mensaje de exito

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "No se pudo actualizar el carrito",
    }); //mandamos un mensaje de error
  }
};

// obtener los datos del carrito

const getUserCart = async (req, res) => {

    try{
        const { userId } = req.body; //extraemos el userId del body
        
        const userData = await userModel.findById(userId); //buscamos al usuario por su id
        let cartData = await userData.cartData; //extraemos el carrito del usuario

        res.json({ success: true, cartData }); //mandamos un mensaje de exito y los datos del carrito

    } catch(error){
        console.log(error);
        res.json({ success: false, message: "No se pudo obtener el carrito" }); //mandamos un mensaje de error
    }

};

export { addToCart, updateCart, getUserCart };
