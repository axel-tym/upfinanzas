const express = require("express");
const app = express();
require("dotenv").config();
const Port = process.env.PORT || 8080;
const hbs = require("hbs");
const mysql = require("mysql2");
const path = require("path");
const nodemailer = require("nodemailer");

//Conectamos la app a una Base de Datos

/*
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE,
});

//Conectamos la DB

const conectar = 
conexion.connect((error) => {
    if (error)
        throw error;
    console.log('Base de Datos Conectada!!');
})*/


//Middelwares
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));


//Vista de la Aplicación
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//////////////////////////////////////////////////////////////

app.get('/', (req, res) =>{
  res.render('index')
});

app.get('/servicios', (req, res) =>{
  res.render('servicios')
});

app.get("/oficinas", (req, res) => {
  res.render("oficinas");
});

app.get("/contacto", (req, res) => {
  res.render("contacto");
});



// VERBO HTTP PARA RECIBIR DATOS
app.post("/contacto", (req, res) => {
    console.log("estoy corriendo")
  console.log("req", req.body);

  const { nombre, apellido, telefono, correo, consulta } = req.body;

  //Validacion basica

  let validacion = "Faltan datos para dejar la consulta";

  if (nombre == "" || consulta == "") {
    res.render("contacto", {
      titulo: "Faltan datos",
      validacion,
    });
  } else {
    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(correo);
    console.log(consulta);

    //conectar()

    let data = {
      clientes_nombre: nombre,
      clientes_apellido: apellido,
      clientes_telefono: telefono,
      clientes_correo: correo,
      clientes_consulta: consulta,
    };
    console.log("nombre", nombre)
    let sql = "INSERT INTO clientes SET ?";

    /*
    let query = conexion.query(sql, data, (error, results) => {
      if (error) throw error;
      res.render("Contacto");
    });*/
  } 
});

app.listen(Port, ()=>{
  console.log(`Servidor corriendo en el Puerto ${Port}`);
});
app.on('error', (error) =>{
  console.log(`Tenemos un error ${error}`);
});



