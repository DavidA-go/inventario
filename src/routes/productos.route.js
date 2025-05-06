import {Router} from "express";
import { methodHTTP as productosController } from "../controllers/productos.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", productosController.getProductos )
router.put("/:id", productosController.updateProducto )

/* hacemos disponible al router en toda la app */
export default router;