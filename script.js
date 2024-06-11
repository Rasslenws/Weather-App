let result = document.getElementById("result");
let searchbtn = document.getElementById("search-btn");
let city = document.getElementById("city");

// Fonction pour récupérer et afficher les détails météorologiques
let getwether = () => {
    let cityvalue = city.value;
    if (cityvalue.length == 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        fetch(url)
            .then((resp) => resp.json())
            // Si le nom de la ville est valide
            .then((data) => {
                console.log(data);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.name);
                console.log(data.main);
                console.log(data.main.temp_min);
                console.log(data.main.temp_max); 

                result.innerHTML = `
                    <h2>${data.name}</h2>
                    <h4 class="weather">${data.weather[0].main}</h4>
                    <h4 class="desc">${data.weather[0].description}</h4>
                    <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png">
                    <h1>${data.main.temp} &#176;</h1>
                    <div class="temp-container">
                        <div>
                            <h4 class="title">min</h4>
                            <h4 class="temp">${data.main.temp_min}</h4>
                        </div>
                        <div>
                            <h4 class="title">max</h4>
                            <h4 class="temp">${data.main.temp_max}</h4>
                        </div>
                    </div>
                    `;

            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">City not found</h3>`;
            });
    }
};
searchbtn.addEventListener("click",getwether)
window.addEventListener("load", getwether);
