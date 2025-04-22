import getConnection from "./../db/database.js"

const getCategorias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getCategoria = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postCategorias = async (req, res) => {
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;

        const categoria = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?",categoria )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateCategoria = async (req, res) => {
    try {
        const {id} = req.params
        const {CategoriaNombre, Descripcion, Imagen} = req.body;

        const categoria = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?",[categoria, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteCategoria = async (req, res)=>{
    try {
        console.log("id de categoria", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Categorias WHERE CategoriaID = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategoria,
    updateCategoria,
    deleteCategoria
}