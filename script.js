const button = document.getElementById("search-btn")
const jokeSection = document.querySelector('.joke')
const radioButton = document.querySelectorAll("input")
let jokeType = ""
function randomJoke() {
    
    radioButton.forEach((radio) => {
        radio.addEventListener('change', (event)=>{
           jokeType = radio.value
       })     
    });
    if(jokeType!== ""){
        axios.get(`https://v2.jokeapi.dev/joke/${jokeType}?blacklistFlags=nsfw&format=txt`).then((response)=> {
        let result = (response.data);
        //console.log(result)
        jokeSection.innerHTML = "";
        const jokeParag = document.createElement('p');
        jokeParag.innerHTML = `Random ${jokeType} Joke: <br><br> ${result}`;
        jokeSection.appendChild(jokeParag);
    });
    }else{
    axios.get("https://v2.jokeapi.dev/joke/Programming?format=txt").then((response)=> {
    let result = (response.data);
    //console.log(result)
    jokeSection.innerHTML = "";
    const jokeParag = document.createElement('p');
    jokeParag.innerHTML = `Random Programming Joke: <br><br> ${result}`;
   
    jokeSection.appendChild(jokeParag);
    });
}
}

button.addEventListener("click" , ()=> {
    
    randomJoke();
});

radioButton.forEach((radio) => {
    radio.addEventListener('change', (event)=>{
       jokeType = radio.value;
   })     
});