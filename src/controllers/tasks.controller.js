const pool = require('../db')


const getAllTasks = async (req, res) =>{
    const result = await pool.query("select * from casa");
  console.log(result);
  res.json(result.rows);
  };

const getTask = async (req, res) =>{
    res.send("recibiendo una simple tarea");
  };

const createTask = async (req, res) =>{
    res.send("creando tarea");
  };

  const createCasa = async (req, res) => {
    const { username, password} = req.body;
    try {
      const nameCasa = await pool.query(
        "SELECT * FROM casa WHERE LOWER(nombrecasa) = LOWER($1);",
        [username]
      );
      if (nameCasa.rows.length > 0) {
        return res.status(200).json({ data: 1 });
      }
      const result = await pool.query(
        "INSERT INTO casa (nombrecasa, codigocasa) VALUES ($1, $2)",
        [username, password]
      );
      return res.json({dato : result.rows[0]});
    } catch (error) {
      console.log("Error añadiendo casa");
      return res.json({ error: error.message });
    }
  };

const deleteTask = async (req, res) =>{
    res.send("eliminando tarea");
  };

const updateTask = async (req, res) =>{
    res.send("actualizando tarea");
  };



module.exports = {
    getAllTasks,
    createCasa,
    getTask,
    createTask,
    deleteTask,
    updateTask
};