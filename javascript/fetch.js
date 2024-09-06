buttonTwo = document.getElementById('two');
let divTwo = document.getElementsByTagName('div')[0];
buttonTwo.addEventListener('click', () =>{
    fetch('https://icanhazdadjoke.com',{
        headers: {"Accept": "application/json"}
    })
        .then((res) =>{
            return res.json();
        })
        .then((jokeObject) =>{
            return jokeObject.joke.toUpperCase();
        })
        .then((finalJoke) => {
            divTwo.innerHTML = finalJoke;
        })
        .catch((e) => {
            console.log("oh no man, there's an error", e);
        })

})
