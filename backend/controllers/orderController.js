import orderModel from "../models/orderModel.js"
import userModel from "../models/userModels.js"

// placing orders using COD (cash on delivery) method

const placeOrder = async ( req, res) =>{

try{

    const {userId, items, amount, address} = req.body

    const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod:'COD',
        payment:false,
        date: Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, {cartData:{}}) // esto es para borrar los objetos en el carrito una vez se a hecho la transaccion corectamente 
    res.json({ success: true, message: "Todo listo recibiras un email con mas detalles de tu compra" }); //mandamos un mensaje de exito
}catch(error){
    console.log(error);
    res.json({ success: false, message:error.message }); //mandamos un mensaje de error
    
}

}

// placing orders using Stripe method

const placeOrderStripe = async ( req, res) =>{
    
}

// placing orders using Razorpay method

const placeOrderRazorpay = async ( req, res) =>{
    
}

// All orders data for admin panel

const allOrders = async ( req, res) =>{
    
}

// user orders data for forntend

const userOrders = async ( req, res) =>{
    
}

// Update orders status from admin panel

const updateStatus = async ( req, res) =>{
    
}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus}