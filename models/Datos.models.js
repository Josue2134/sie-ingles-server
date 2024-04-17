const mongoose=require("mongoose");
const datos=mongoose.Schema(
    {
        nombre:String,
        direccion:String,
        correo:String,
        estado:String,
        telefono:Number
    }
);

const Datos=mongoose.model('datos',datos);
export default Datos;