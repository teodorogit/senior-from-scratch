btn_blue = document.getElementById('btn-01')
btn_green = document.getElementById('btn-02')
container = document.getElementsByClassName('container')[0]

function color_green() {
  container.setAttribute('class','container bg-green')
  setarCor('bg-green')
}
btn_green.addEventListener('click', color_green)


function color_blue() {
  container.setAttribute('class','container bg-blue')
  setarCor('bg-blue')
}
btn_blue.addEventListener('click', color_blue)


function setarCor(cor) {
  localStorage.setItem("corDeFundo", cor)
}

function carregarCor() {
  color =  window.localStorage.getItem('corDeFundo')
  if (color == 'bg-blue'){
    color_blue()
  } else {

    color_green()
  }

}

document.body.addEventListener("load", carregarCor)