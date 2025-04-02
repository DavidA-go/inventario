import {Router} from "express";
import { methodHTTP as categoriasController } from "../controllers/categorias.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", categoriasController.getCategorias )

/* hacemos disponible al router en toda la app */
export default router;