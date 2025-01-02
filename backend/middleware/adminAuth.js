import jwt from "jsonwebtoken"; //importar jwt

const adminAuth = async (req, res, next) => {

    try {
        const { token } = req.headers; //token del usuario
        if (!token) { // si no hay token
            return res.json({ success: false, message: "No estas autorizado al acceso" }); //mensaje de error
        }
        const tokenVerify = jwt.verify(token, process.env.JWT_SECRET); //verificar el token del usuario 
        if ( tokenVerify !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "No estas autorizado tus credenciales no coinciden" })
        }
        next(); //si todo esta bien, pasar al siguiente middleware
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default adminAuth; //exportar la funcion adminAuth