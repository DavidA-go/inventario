import {Router} from "express";
import { methodHTTP as clientesController } from "../controllers/clientes.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", clientesController.getClientes )

/* hacemos disponible al router en toda la app */
export default router;