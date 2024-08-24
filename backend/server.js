const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_react_mysql_node'
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE email_user = ? AND password_user = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json(err)
    if (data.length > 0) {
      return res.json("Login Exitoso")
    } else {
      return res.json("Ups! Email o Contraseña incorrectas")
    }
  })
})

app.listen(8081, () => {
  console.log('Listening...')
})