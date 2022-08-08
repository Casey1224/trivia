import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTrivia() {
    let template = ''

    ProxyState.trivia.forEach(t => template += t.Template)

    // @ts-ignore
    document.getElementById('Trivia').innerHTML = `
      <div>
        ${template}
      </div>
    `
}
export class TriviaController {
    constructor() {
        console.log('testing');

        ProxyState.on('trivia', _drawTrivia)

    }


    async goGetTriviaFromTrivia() {
        try {
            await triviaService.getTrivia()
            console.log('I dont run until the line above is finished')
        } catch (error) {
            console.error('[Getting Trivia]', error)
            Pop.error(error)
        }
    }

    async next() {
        try {
            await triviaService.getNextTrivia()
        } catch (error) {
            console.error('[next error]', error)
            Pop.error(error)
        }
    }

    async previous() {
        try {
            await triviaService.getPreviousTrivia()
        } catch (error) {
            console.error('[previous error]', error)
            Pop.error(error)
        }
    }
}
