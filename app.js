document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create XHR object
    const xhr = new XMLHttpRequest();

    // open - specify the type of request you want to make and the url or file name you wanna make it to
    xhr.open('GET', 'data.txt', true);

    // console.log('READY STATE', xhr.readyState);

    // OPTIONAL - used for spinners/loaders display something while page loads

    xhr.onprogress = function () {
        console.log('READY STATE', xhr.readyState);
    }
    // console = " READY STATE #"

    xhr.onload = function () {
        console.log('READY STATE', xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    //OLDER SYNTAX - don't use it, use the inload method
    // xhr.onreadystatechange = function () {
    //     console.log('READY STATE', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function () {
        console.log('Request Error...');
    }

    // call send to finalize everything
    xhr.send();

    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request recieved
    // 3: processing request
    // 4: request finished and response is ready


    // HTTP STATUS'
    // 200: OK
    // 403: FORBIDDEN
    // 404: NOT FOUND

}