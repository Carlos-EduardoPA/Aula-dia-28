const email = document.getElementById('inputEmail')
const senha = document.getElementById('inputSenha')

function validarFormulario(event) {
    event.preventDefault()

        if(email.value === '' || senha.value === '') {
            alert('preencha todos os campos!')
            return
        } else {
            console.log({
                email: email.value,
                senha: senha.value
            })
        }
}