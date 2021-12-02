const mysql = require('mysql')
let plantas

const connector = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b54bbdafdabc06',
    password: '527f1b87',
    database: 'heroku_7e228a0355e86cc'
})

connector.connect(err => {
    if(err) throw err
    console.log('conectado')
})

const agregarUsuario = (usuario,contraseña) => {
    const sql = `INSERT INTO usuario(idUsuario,Usuario,Contraseña) VALUES (${null}, "${usuario}", "${contraseña}")`
    connector.query(sql, (err, result, field)=>{
        if(err) throw err
        console.log(result)
    })
}

const agregarPlanta = (nom_planta,nom_cien_planta,cuida_planta) => {
    const sql = `INSERT INTO planta(idPlanta,nombrePlanta,cuidadosPlanta,nombreCienPlanta) VALUES(${null}, "${nom_planta}", "${cuida_planta}", "${nom_cien_planta}")`
    connector.query(sql, (err,result,field)=>{
        if(err) throw err
        console.log(result)
    })
}

const comprobarUsuario = async (usuario,contrasena) => {
    const sql = `SELECT Contraseña FROM usuario WHERE Usuario = "${usuario}"`
    await connector.query(sql, (err,result,field)=>{
        let wey = result[0]
        console.log(wey.Contraseña)
        if(err || contrasena!=wey.Contraseña){
            console.log("no existe")
            return false
        }
        console.log("si existe")
        return true
    })
}

const obtenerPlantas = () => {
    const sql = 'SELECT * FROM planta'
    connector.query(sql, (err,result,field)=>{
        if(!err){
            plantas = result
        }else{
            console.log(err)
        }
    })
    return plantas
}

module.exports = {agregarUsuario, agregarPlanta, comprobarUsuario, obtenerPlantas}
//mysql://b54bbdafdabc06:527f1b87@us-cdbr-east-04.cleardb.com/heroku_7e228a0355e86cc?reconnect=true