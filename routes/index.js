const routerx=require("express-promise-router");
const DatosR=require("./Datos.routes");
const router = routerx();

router.use("/datos",DatosR);

export default router;