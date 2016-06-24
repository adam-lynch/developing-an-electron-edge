var ws = new WebSocket("ws://localhost:9998");
ws.onopen = () => {
  // We're connected
  ws.send("Message to send");
};

ws.onmessage = (event) => {
  console.log(event.data);
};

ws.onclose = () => {
  // WebSocket connection is closed
};