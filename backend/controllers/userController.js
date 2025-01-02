import validator from "validator";
import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//route para el login del usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        succes: false,
        message: "El usuario no existe, revisa si tu email esta bien escrito",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ succes: true, token });
    } else {
      res.json({ succes: false, message: "La contraseña no es correcta" });
    }
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

// route para el registro de un usuario
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validar si el usuario existe  o no
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ succes: false, message: "El usuario ya existe" });
    }
    // validar el formato del email y contraseña fuerte
    if (!validator.isEmail(email)) {
      return res.json({ succes: false, message: "El email no es valido" });
    }

    if (password.length < 8) {
      return res.json({
        succes: false,
        message: "La contraseña debe tener al menos 8 caracteres",
      });
    }

    //encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ succes: true, message: "Usuario registrado", token });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

//route para el login  del admin
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body //obtener los datos del body
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) //comparar si el email y contraseña son iguales a los del admin
     {
      
      const token = jwt.sign(email + password, process.env.JWT_SECRET); //crear un token para el admin
      res.json({ succes: true, token }); //enviar el token
    } else {
      res.json({ succes: false, message: "Email o contraseña incorrectos" });
    }
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
