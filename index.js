const p = document.querySelector("p");
const url = new URL ("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8d980e10b733d1de5c4782ac5c258318")
const city = document.querySelector("input");

function setCity() {
    url.searchParams.set('q', city.value);
    if (city.value == "") {
        p.innerText = "Please Enter a City Name"
    } else {
    getData();
    };
}

async function getData() {
    const response = await fetch(url, {mode: 'cors'});
    const wData = await response.json();
    if (wData.cod == "404") {
        p.innerText = wData.message;
    } else {
    p.innerText = wData.weather[0].main;
    };
}

getData();