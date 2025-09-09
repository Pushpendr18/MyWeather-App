

////weather.com
// const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=Indore';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'e42da761b4msh317990da63607f3p1a433djsnb8ced9854c2d',      // APi key ->  //9feee4a8bbe3403da81200756250709 
// 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// online
// async function getWeather() {
//   const city = document.getElementById("Mumbai").value;
//   const apiKey = "9feee4a8bbe3403da81200756250709"; // 🔑 Replace with your WeatherAPI key
//   const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     if (data.error) {
//       document.getElementById("result").textContent = "City not found!";
//       return;
//     }

//     const weatherData = {
//       cloud_pct: data.current.cloud,
//       temp: data.current.temp_c,
//       feels_like: data.current.feelslike_c,
//       humidity: data.current.humidity,
//       min_temp: data.forecast.forecastday[0].day.mintemp_c,
//       max_temp: data.forecast.forecastday[0].day.maxtemp_c,
//       wind_speed: data.current.wind_kph,
//       wind_degrees: data.current.wind_degree,
//       sunrise: data.forecast.forecastday[0].astro.sunrise,
//       sunset: data.forecast.forecastday[0].astro.sunset
//     };

//     document.getElementById("result").textContent =
//       JSON.stringify(weatherData, null, 2);

//   } catch (err) {
//     document.getElementById("result").textContent = "Error fetching data!";
//   }
// }

// const city = document.getElementById("city").value.trim(); 
///pkcoder/////
async function getWeather(city) {
   const cityName = document.getElementById("cityName");
  if (cityName) {
  cityName.innerHTML = city
  }
  const apiKey = "9feee4a8bbe3403da81200756250709"; 

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

  const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (data.error) {
      console.log("City not found!");
      return;
    }

    const weatherData =  {
      temp: data.current.temp_c,
      feels_like: data.current.feelslike_c,
      humidity: data.current.humidity,
      min_temp: data.forecast.forecastday[0].day.mintemp_c,
      max_temp: data.forecast.forecastday[0].day.maxtemp_c,
      wind_speed: data.current.wind_kph,
      wind_degrees: data.current.wind_degree,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset
    };

    console.log(weatherData);

    //
    document.getElementById("temp").innerHTML = weatherData.temp + "°C";
    document.getElementById("temp2").innerHTML = weatherData.temp;
    document.getElementById("min_temp").innerHTML = weatherData.min_temp + "°C";
    document.getElementById("max_temp").innerHTML = weatherData.max_temp + "°C";
    document.getElementById("feels_like").innerHTML = weatherData.feels_like + "°C";
    document.getElementById("humidity").innerHTML = weatherData.humidity + "%";
    document.getElementById("humidity2").innerHTML = weatherData.humidity;
    document.getElementById("wind_speed").innerHTML = weatherData.wind_speed + " km/h";
    document.getElementById("wind_speed2").innerHTML = weatherData.wind_speed;
    document.getElementById("wind_degrees").innerHTML = weatherData.wind_degrees + "°";
    document.getElementById("sunrise").innerHTML = weatherData.sunrise;
    document.getElementById("sunset").innerHTML = weatherData.sunset;
    //

  } catch (err) {
    console.error("Error fetching data!", err);
  }
}
 submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
  })


// Call the function
getWeather("Gwalior");


// document.getElementById("get")