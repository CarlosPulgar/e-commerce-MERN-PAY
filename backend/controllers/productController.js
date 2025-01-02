import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

// funcion para agregar un producto
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path,{ resource_type: 'image' });
        return result.secure_url;
      })
    )  
    console.log(imagesUrl);

    const productData = {
      name,
      description,
      category,
      price:Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes:JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    }
    console.log(productData);
    
    const product = new productModel(productData);
    await product.save();
 
    res.json( {succes:true, message: "Producto agregado"} )
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

// funcion para obtener todos los productos
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ succes: true, products });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

// funcion para obtener un producto por id
const singleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    res.json({ succes: true, product });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

/* // funcion para actualizar un producto por id       
const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category, stock },
      { new: true }
    );
    res.json({ succes: true, message: "Producto actualizado", product });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};   */

// funcion para eliminar un producto por id
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ succes: true, message: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: error.message });
  }
};

export { addProduct, singleProduct, listProducts, removeProduct };
