/* Importamos a framework express */
import express from "express";

/* Asignamos a app toda funcionalidad para mi server web */
const app = express();

/* Setear un puerto a mi web server */
app.set("port",5000)

/* Hacemos disponible a mi server app para toda la aplicacion */
export default app;