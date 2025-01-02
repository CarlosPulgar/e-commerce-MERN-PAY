import multer from 'multer';
// Multer es un middleware de node.js para manejar multipart/form-data, que se utiliza principalmente para subir archivos. Está escrito sobre busboy para el máximo rendimiento.
const storage = multer.diskStorage({ //diskStorage es un método de multer que nos permite almacenar los archivos en el disco
    filename: function(req, file, callback) {  //filename es un método de diskStorage que nos permite establecer el nombre del archivo
        callback(null,file.originalname); //originalname es una propiedad del archivo que devuelve el nombre del archivo
    }
})

const upload = multer({ storage});

export default upload; //exporta la variable upload para usarla en otros archivos

