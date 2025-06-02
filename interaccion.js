function validar(){
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    if (nombre.trim() ===""){
        alert("Porfavor, completa todos los campos. 😁");     
    }else{
        alert("Formulario enviado satisfactoriamente ✅✅")
    }
}