import './style.css'
import './webSocketClient.ts'
import {sendText} from './webSocketClient.ts'
import {getWebSocket} from './webSocketClient.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <h3>Chat Application</h3>
        <button id="connectButton">Connect</button>
        <textarea id="received" disabled="disabled"></textarea>
        <textarea id="input"></textarea>
        <button id="sendButton">Send</button>
`
const textInput = document.querySelector<HTMLTextAreaElement>('#input')!;
const textOutput = document.querySelector<HTMLTextAreaElement>('#received')!;
const connectButton = document.querySelector<HTMLButtonElement>('#connectButton')!;
var ws=getWebSocket(textInput,textOutput,connectButton);
const sendButton = document.querySelector<HTMLTextAreaElement>('#sendButton')!;
sendButton.addEventListener('click', () => {
    sendText(ws,textInput.value);
});
document.querySelector<HTMLButtonElement>('#connectButton')!.addEventListener('click', () => {
    ws.close();
    ws=getWebSocket(textInput, textOutput,connectButton);
})



