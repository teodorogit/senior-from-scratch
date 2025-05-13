btn_enviar = document.getElementById('btn-send')
btn_ver_Senha = document.getElementById('btn-ver-senha')

function validar(name, email) {
  let div_message = document.getElementById('message')

  div_message.innerHTML = '';
  if (name.length <=3 ) {
    const error_message = document.createElement('p')
    error_message.textContent= 'Tamanho do nome é inválido'
    error_message.setAttribute('class', 'invalid_message')
    div_message.appendChild(error_message)
    input_email.disabled = true;
    input_email.setAttribute('class', 'off')
    
    return false
  } else {
    // Reativar e resetar o background do campo de email se o nome for válido
    input_email.disabled = false;
    input_email.style.backgroundColor = '';

  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email_regex.test(email.value)) {
    const error_message = document.createElement('p');
    error_message.textContent = 'Email inválido';
    error_message.setAttribute('class', 'invalid_message');
    div_message.appendChild(error_message);
    return false;
  }
}

  return true;
}

function enviar() {
  input_name = document.getElementById('ipt-name').value
  input_email = document.getElementById('ipt-email')
 const login =  validar(input_name, input_email)

 if (login){
  window.alert('Acesso permitido')
 }

}

btn_enviar.addEventListener('click', enviar)
btn_ver_Senha.addEventListener('mousedown', verSenha)
btn_ver_Senha.addEventListener('mouseup', ocultarSenha)

function verSenha() {
const inputSenha = document.getElementById('ipt-senha')
  inputSenha.setAttribute('type', 'text')

}

function ocultarSenha(){
  const inputSenha = document.getElementById('ipt-senha')
  inputSenha.setAttribute('type','password')

}