const VAR_KELVIN = 273.15
const KELVIN_TO_FAHRENHEIT = (kelvin) => (kelvin - VAR_KELVIN) * 9 / 5 + 32;
const FAHRENHEIT_TO_KELVIN = (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + VAR_KELVIN;
const FAHRENHEIT_TO_CELSIUS = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const CELSIUS_TO_FAHRENHEIT = (celsius) => (celsius * 9) / 5 + 32;
const CELIUS_TO_KELVIN = (celsius) => celsius + VAR_KELVIN;
const KELVIN_TO_CELSIUS = (kelvin) => kelvin - VAR_KELVIN;


function convert_to_celsius(valorInput) {
    resultado += `Celsius para Kelvin: ${CELIUS_TO_KELVIN(valorInput)}\n`
    resultado += `Celsius para Fahrenheit: ${CELSIUS_TO_FAHRENHEIT(valorInput)}\n`;
    return resultado
}

function convert_to_fahrenheit(valorInput) {
    resultado += `Fahrenheitvin para Celsius: ${FAHRENHEIT_TO_CELSIUS(valorInput)}\n`
    resultado += `Fahrenheit para Kelvin: ${FAHRENHEIT_TO_KELVIN(valorInput)}\n`;
    return resultado
}

function convert_to_kelvin(valorInput) {
    resultado += `Kelvin para Celsius: ${KELVIN_TO_CELSIUS(valorInput)}\n`
    resultado += `Kelvin para Fahrenheit: ${KELVIN_TO_FAHRENHEITT(valorInput)}\n`;
    return resultado
}

function verificar() {
    let valor_select = document.getElementById('cards').value;
    let elementoEntrada = document.getElementById('comparacao').value;
    let valor_to_convert = parseFloat(elementoEntrada) || 0;
    let resultado = '';

    switch (valor_select){
        case '1':
            resultado = convert_to_celsius(valor_to_convert)
            adicionarResultado(resultado.toString())
            break;
         case '2':
            resultado =  convert_to_fahrenheit(valor_to_convert)
            adicionarResultado(resultado.toString())
        
            break;
        case '3':
            resultado = convert_to_kelvin(valor_to_convert)
            adicionarResultado(resultado.toString(valor_to_convert))
            break
        default:
            window.alert('Nenhuma opção selecionada')
                }
;
}


function adicionarResultado(texto) {
    let resultadoDiv = document.getElementById('resultado');
    let novoElemento = document.createElement('p'); // Cria um novo <p>
    novoElemento.innerHTML = texto.replace(/\n/g, '<br>'); // Substitui \n por <br>
    resultadoDiv.appendChild(novoElemento); // Insere o novo <p> na div
}
