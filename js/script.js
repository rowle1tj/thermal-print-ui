function sendPrintRequest(content) {
    fetch('http://192.168.1.103/print', {
        method: 'POST',
        body: content,
        mode: 'no-cors'
    })
    .catch(err => {
            console.log(err);
        })
}

function sendTextAreaPrint() {
    sendPrintRequest(document.querySelector('textarea[id="input"]').value);
}

function sendFeedRequest() {
    sendPrintRequest("\n");
}