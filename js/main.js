
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var searchInput=document.getElementById("search")
async function getInfo(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ae700c0983ee407f94c15356240601&q=${city}&days=7`);
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data. HTTP error! Status: ${response.status}`)
          }
        const data = await response.json();
        console.log(data);

        // display
        const d = new Date()
        let currentDay = days[d.getDay()]
        document.querySelector(".day-1 .current-day").innerHTML = currentDay
        document.querySelector(".day-1 .location .city").innerHTML= data.location.region
        document.querySelector(".day-1 .location .country").innerHTML= data.location.country 
        document.querySelector(".day-1 .location .temp").innerHTML= data.current.temp_c +"°C"   
        document.querySelector(".day-2 .n-day").innerHTML= innerHTML= data.forecast.forecastday[1].date
        document.querySelector(".day-2 .location .temp").innerHTML= data.forecast.forecastday[1].hour[0].temp_c +"°C"
        document.querySelector(".day-3 .nn-day").innerHTML= data.forecast.forecastday[2].date    
        document.querySelector(".day-3 .location .temp").innerHTML= data.forecast.forecastday[2].hour[0].temp_c +"°C"   
     } catch (error) {

        console.error('Error fetching data:', error);
    }
}

function searching() {
    var city = searchInput.value;
    getInfo(city);
}

