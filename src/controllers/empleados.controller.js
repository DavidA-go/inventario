import getConnection from "./../db/database.js"

const getEmpleados = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
    /* res.json({"Categoria":"Electrodomesticos"}) */
}

const postEmpleados = async (req, res) => {
    try {
        const {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto} = req.body;

        const empleado = {
            Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto
        }
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO empleados SET ?",empleado )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getEmpleados,
    postEmpleados
}