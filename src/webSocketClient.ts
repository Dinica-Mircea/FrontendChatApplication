export function sendText(ws: WebSocket, text: string) {
    ws.send(text);
}

export function getWebSocket(textArea: HTMLTextAreaElement, textReceived: HTMLTextAreaElement, connectButton: HTMLButtonElement) {
    const ws = new WebSocket('ws://localhost:8080/ws');
    ws.onmessage = ((e) => {
        textReceived.value = textReceived.value + "\n" + e.data;
        textArea.value = "";
        console.log("Received message:", e.data)
    })
    ws.onopen = () => {
        console.log('Connected to server');
        connectButton.disabled = true;
    };
    ws.onclose = () =>{
        console.log('Disconnected from server');
        connectButton.disabled=false
    }

    return ws;
}


