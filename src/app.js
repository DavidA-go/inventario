/* Importamos a framework express */
import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"
import empleadoRoutes from "./routes/empleados.route.js"
import clienteRoutes from "./routes/clientes.route.js"
import productoRoutes from "./routes/productos.route.js"

/* Asignamos a app toda funcionalidad para mi server web */
const app = express();

/* Setear un puerto a mi web server */
app.set("port",5000)

app.use(cors());

/* Middleware */
app.use(express.json());

/* routes */
app.use("/api/categorias", categoriaRoutes)
app.use("/api/empleados", empleadoRoutes)
app.use("/api/clientes", clienteRoutes)
app.use("/api/productos", productoRoutes)

/* Hacemos disponible a mi server app para toda la aplicacion */
export default app;