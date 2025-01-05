import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => { //creamos una funcion asincrona que recibe tres parametros
    const {token } = req.headers; //extraemos el token de los headers

    if (!token) { //si no existe el token
        return res.json({ success: false, message: ' No tienes permiso para acceder a esta ruta' }); //retornamos un mensaje de error       
    }
    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET); //creamos una constante que almacena el token decodificado
        req.body.userId = token_decode.id //agregamos al body el id del usuario
        next() //llamamos a la funcion next para que continue con la siguiente funcion 

    } catch (error) {
        console.log(error) //mostramos el error en consola;
        res.json({ success: false, message: 'No tienes permiso para acceder a esta ruta' }) //retornamos un mensaje de error
        
    } //manejamos el error
}

export default authUser //exportamos la funcion authUser