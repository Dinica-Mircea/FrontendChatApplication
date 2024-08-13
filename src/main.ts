import './style.css'
import './webSocketClient.ts'
import sendText, {ws} from './webSocketClient.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <h3>Chat Application</h3>
        <textarea id="received" disabled="disabled"></textarea>
        <textarea id="input"></textarea>
        <button id="sendButton">Send</button>
`
const sendButton = document.querySelector<HTMLButtonElement>('#sendButton')!;
const textArea = document.querySelector<HTMLButtonElement>('#input')!;
sendButton.addEventListener('click', () => {
    sendText(textArea.value)
});
const textReceived = document.querySelector<HTMLButtonElement>('#received')!;
ws.onmessage = ((e) => {
    textReceived.value = textReceived.value + "\n" + e.data;
    textArea.value = "";
})


