try{
    document.getElementById("registrarse").addEventListener('click', ()=>{
        let usuario = document.getElementById("usuario")
        let contraseña = document.getElementById("contrasena")
        window.location.href = `registrarUsuario/${usuario.value}/${contraseña.value}`
    })
}catch{}
try{
    document.getElementById("reg_planta").addEventListener('click', ()=>{
        let nom_planta = document.getElementById("nom_planta")
        let nom_cien_planta = document.getElementById("nom_cien_planta")
        let cuida_planta = document.getElementById("cuida_planta")
        window.location.href = `registrarPlanta/${nom_planta.value}/${nom_cien_planta.value}/${cuida_planta.value}`
})
}catch{}
try{
    document.getElementById("iniciar_sesion").addEventListener('click', ()=>{
        let usuario = document.getElementById("usuario")
        let contraseña = document.getElementById("contrasena")
        window.location.href = `comprobarUsuario/${usuario.value}/${contraseña.value}`
})
}catch{}