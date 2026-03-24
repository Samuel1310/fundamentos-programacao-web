document.addEventListener("DOMContentLoaded",function(){

const form = document.getElementById("formContato")

if(form){

form.addEventListener("submit",function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let mensagem = document.getElementById("mensagem").value

if(nome=="" || email=="" || mensagem==""){

alert("Preencha todos os campos")
return

}

if(!email.includes("@") || !email.includes(".")){

alert("Email inválido")
return

}

alert("Mensagem enviada com sucesso!")

form.reset()

})

}

})