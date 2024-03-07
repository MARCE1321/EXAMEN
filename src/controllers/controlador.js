


let botonFormulario=document.getElementById("enviar")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioCorreo=document.getElementById("correo")
let cajaFormularioTelefono=document.getElementById("telefono")
let cajaFormularioAsunto=document.getElementById("asunto")
let cajaFormularioMensaje=document.getElementById("mensaje")


document.getElementById('enviar').addEventListener('click', function(evento) {


    evento.preventDefault()
   
    let nombre = cajaFormularioNombre.value
    let correo= cajaFormularioCorreo.value
    let telefono = cajaFormularioTelefono.value
    let asunto = cajaFormularioMensaje.value
    let mensaje = cajaFormularioAsunto.value

    console.log('Nombre:', nombre)
    console.log('Correo:', correo)
    console.log("telefono:",telefono)
    console.log('Mensaje:', mensaje)

    if(""==nombre && ""==telefono&&""==correo && ""==asunto){
        
        Swal.fire({
            icon: "error",
            title: "Oops... "+nombre+"Tienes un problema",
            text: "Verifica tus credenciales",
            
          });
        

    }else{
        Swal.fire({
            title: "Hola "+nombre,
            text: "Tus credenciales son correctas",
            icon: "success"
        })
    }
       
   
});
