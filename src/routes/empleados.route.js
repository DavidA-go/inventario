import {Router} from "express";
import { methodHTTP as empleadosController } from "../controllers/empleados.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", empleadosController.getEmpleados )
router.get("/", empleadosController.postEmpleados )

/* hacemos disponible al router en toda la app */
export default router;