export var ws = new WebSocket('ws://localhost:8080/ws');

ws.onopen= () => {
    console.log('Connected to server');
};

// ws.onmessage = ((e) => {
//     textReceived.value = textReceived.value + "\n" + e.data;
//     textArea.value = "";
//     console.log("Received message:", e.data)
// })

export default function sendText(text: string) {
    ws.send(text);
}

// const textReceived = document.querySelector<HTMLButtonElement>('#received')!;
// const textArea = document.querySelector<HTMLButtonElement>('#input')!;
// export function connect(){
//     ws = new WebSocket('ws://localhost:8080/ws');
//     ws.onmessage = ((e) => {
//         console.log(textReceived.value)
//         textReceived.value = textReceived.value + "\n" + e.data;
//         textArea.value = "";
//         console.log("Received message:", e.data)
//     })
//     console.log('Reconnected to server');
// }


