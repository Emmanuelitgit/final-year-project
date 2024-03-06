import mysql from 'mysql'

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Emma19571!",
    database: "clinic_management_system"
  })

  export default db;