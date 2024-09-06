buttonOne = document.getElementById('one');
divOne = document.getElementsByTagName('div')[0];


buttonOne.addEventListener('click', ()=>{

    //Initialise the XMLHttpRequest(AJAX) object
    let xhr = new XMLHttpRequest();
    
    //configure the AJAX object
    xhr.open("GET",'https://icanhazdadjoke.com');
    xhr.setRequestHeader("Accept","application/json");

    //Step 3: listen for events and define our callback function
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let jsonData = xhr.responseText;
            let JavaScriptObject = JSON.parse(jsonData);
            divOne.innerHTML = JavaScriptObject.joke;
        }
    }

    //Step 4: send our request to the server
    xhr.send();
})


