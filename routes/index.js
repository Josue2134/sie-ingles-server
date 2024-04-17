const routerx=require("express-promise-router");
const DatosR=require("./Datos.routes");
const router = routerx();

router.use("/datos",DatosR);
module.exports = router;