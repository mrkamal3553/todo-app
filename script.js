
function showWeather() {
    const city = document.getElementById("citySelect").value;
    let output = "";

    if (city === "vizag") {
        output = "☁️ Visakhapatnam: 31°C, Mostly Cloudy";
    } else if (city === "hyd") {
        output = "🌞 Hyderabad: 35°C, Sunny";
    } else if (city === "delhi") {
        output = "🌧️ Delhi: 29°C, Rainy";
    } else {
        output = "";
    }

    document.getElementById("weatherOutput").innerText = output;
}
