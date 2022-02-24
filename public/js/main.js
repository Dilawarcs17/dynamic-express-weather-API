const cityname = document.getElementById('cityName');
const submission = document.getElementById('submitBtn');
const city_output_weather = document.getElementById("city_name")
const weather = document.getElementById("temp_status")
const temperature = document.getElementById("temp")
const middle_layer_hide = document.querySelector(".middle_layer")

submission.addEventListener('click', async (event) => {
    event.preventDefault();
    const city_value = cityname.value;
    if (city_value === "") {
        city_output_weather.innerHTML = "Kindly Enter the name of the particular city of which you want to check the weather."

    }
    else {
        try {
            const Link = `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=7f71ee87df60a0c9527b2ea8be166760`;
            let response_Link = await fetch(Link);
            // console.log(response_Link);

            let response_Link_data = await response_Link.json();
            // let json_to_obj = await JSON.parse(response_Link);

            const datainArray = [response_Link_data];

            city_output_weather.innerText = `Wather of the ${datainArray[0].name} is:`;
            temperature.innerText =` ${datainArray[0].main.temp} °C`;
            // weather.innerText = datainArray[0].weather[0].main;

            let weather_icon = datainArray[0].weather[0].main;
            // weather icons 
            if (weather_icon == 'Clear') {
                weather.innerHTML = ` <i class="fa-solid sun fa-sun"></i>`
            } else if (weather_icon == 'Clouds') {
                weather.innerHTML = `<i class="fa-solid clouds fa-cloud"></i>`
            } else if (weather_icon == "Rain") {
                weather.innerHTML = `<i class="fa-solid rain fa-cloud-rain"></i>`
            } else {
                weather.innerHTML = `<i class="fa-solid sun fa-sun"></i>`
            }
        }
        catch {
            city_output_weather.innerHTML = "Kindly Enter the name of the particular city of which you want to check the weather properly."
            middle_layer_hide.classList.add("data_hide");
        }
    }
    // cityname = `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=7f71ee87df60a0c9527b2ea8be166760`
    // alert("hello")
});
