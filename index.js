const express = require('express')
const session = require('express-session')

const {agregarUsuario, comprobarUsuario, agregarPlanta, obtenerPlantas } = require('./src/mysql_conector.js')
let plantas

const app = express()

app.listen('8000',function(){
    console.log('aplicacion iniciada en el puerto 8000')
})

app.use(session({
    secret: '1234',
    resave: true,
    saveUninitialized: true
}))

app.set('views', './vistas')
app.set('view engine', 'pug')

app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

//Vistas
app.get('/', (req,res)=>{
    res.render('iniciar_sesion')
})
app.get('/registrar_planta',(req,res)=>{
    plantas = obtenerPlantas()
    console.log(plantas)
    res.render('index',{plantas: plantas})
})
app.get('/registarse',(req,res)=>{
    res.render('registrarse')
})

//Funciones
app.get('/registrarUsuario/:usuario/:contrasena', (req,res)=>{
    let usuario = req.params.usuario
    let contraseña = req.params.contrasena
    agregarUsuario(usuario,contraseña)
    res.redirect('/')
})

app.get('/registrarPlanta/:nom_planta/:nom_cien_planta/:cuida_planta',(req,res)=>{
    let nom_planta = req.params.nom_planta
    let nom_cien_planta = req.params.nom_cien_planta
    let cuida_planta = req.params.cuida_planta
    agregarPlanta(nom_planta,nom_cien_planta,cuida_planta)
    res.redirect('/registrar_planta')
})

let existe
app.get('/comprobarUsuario/:usuario/:contrasena', (req,res)=>{
    let usuario = req.params.usuario
    let contraseña = req.params.contrasena
    existe = comprobarUsuario(usuario,contraseña)
    if (existe){
        console.log("voy a registrar planta")
        res.redirect('/registrar_planta')
    }else{
        console.log("no voy a registrar planta")
        res.redirect('/')
    }
})