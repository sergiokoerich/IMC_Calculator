import { Modal } from './modal.js'
import { AlertError } from './alert.js'
import { CalculateIMC, notNumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()  //nao seguir o padrao, nao recarregou a pag.

    const weight = inputWeight.value //pegamos o valor do peso
    const height = inputHeight.value //pegamos o valor da altura

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height) 

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = CalculateIMC(weight, height)  //result obteve o valor do calculo do imc
    const message = `Seu IMC é de ${result}`    //criamos a mensagem

    Modal.message.innerText = message    //adcionamos a mensagem no span
    Modal.open()  //abrimos a caixa 2
}

//fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

