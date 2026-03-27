function logar() {
    let usuario = document.getElementById('inputUsuario').value
    let senha = document.getElementById('inputSenha').value

    if(usuario == "samuel" && senha == "samuel1234"){
        window.location.href = "home.html"
    } else {
        Swal.fire({
            title: "Acesso Negado!",
            text: "Usuário/senha incorreto tente novamente!",
            icon: "error"
        })
    }

}