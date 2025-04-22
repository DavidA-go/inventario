import getConnection from "./../db/database.js"

const getClientes = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientes")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
    /* res.json({"Categoria":"Electrodomesticos"}) */
}

export const methodHTTP = {
    getClientes
}