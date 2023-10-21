const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f106d52b88msh4bdd10ebed66ff1p18790cjsnd9c6898e3257',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'f106d52b88msh4bdd10ebed66ff1p18790cjsnd9c6898e3257',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    },
  };
  
  const func=async(city)=>{
    try {
        // const response = await fetch(url+city, options);
        const result = await response.json();
        console.log(result);
        cityname.innerHTML=city;
        cloud.innerHTML=result.cloud_pct;
        tempp.innerHTML=result.temp;
        wind.innerHTML=result.wind_speed;
        cloud_pct.innerHTML=result.cloud_pct;
        temp.innerHTML=result.temp;
        feels_like.innerHTML=result.feels_like;
        humidity.innerHTML=result.humidity;
        min_temp.innerHTML=result.min_temp;
        max_temp.innerHTML=result.max_temp;
        wind_speed.innerHTML=result.wind_speed;
        // wind_degrees.innerHTML=result.wind_degrees;
        sunrise.innerHTML=result.sunrise;
        sunset.innerHTML=result.sunset;


    } 
    catch (error) {
        console.error(error);
    }
}
const func1=async()=>{
    try {
        // const response = await fetch(url+'new york', options);
        const result = await response.json();
        console.log(result);
        // cityname.innerHTML=city;
        // cloud.innerHTML=result.cloud_pct;
        // tempp.innerHTML=result.temp;
        // wind.innerHTML=result.wind_speed;
        cloud_pct1.innerHTML=result.cloud_pct;
        temp1.innerHTML=result.temp;
        feels_like1.innerHTML=result.feels_like;
        humidity1.innerHTML=result.humidity;
        min_temp1.innerHTML=result.min_temp;
        max_temp1.innerHTML=result.max_temp;
        wind_speed1.innerHTML=result.wind_speed;
        wind_degrees1.innerHTML=result.wind_degrees;
        sunrise1.innerHTML=result.sunrise;
        sunset1.innerHTML=result.sunset;


    } 
    catch (error) {
        console.error(error);
    }
}
func1()
const func2=async()=>{
    try {
        // const response = await fetch(url+'toronto', options);
        const result = await response.json();
        console.log(result);
        // cityname.innerHTML=city;
        // cloud.innerHTML=result.cloud_pct;
        // tempp.innerHTML=result.temp;
        // wind.innerHTML=result.wind_speed;
        cloud_pct2.innerHTML=result.cloud_pct;
        temp2.innerHTML=result.temp;
        feels_like2.innerHTML=result.feels_like;
        humidity2.innerHTML=result.humidity;
        min_temp2.innerHTML=result.min_temp;
        max_temp2.innerHTML=result.max_temp;
        wind_speed2.innerHTML=result.wind_speed;
        wind_degrees2.innerHTML=result.wind_degrees;
        sunrise2.innerHTML=result.sunrise;
        sunset2.innerHTML=result.sunset;


    } 
    catch (error) {
        console.error(error);
    }
}
func2()
const func3=async()=>{
    try {
        // const response = await fetch(url+'bombay', options);
        const result = await response.json();
        console.log(result);
        // cityname.innerHTML=city;
        // cloud.innerHTML=result.cloud_pct;
        // tempp.innerHTML=result.temp;
        // wind.innerHTML=result.wind_speed;
        cloud_pct3.innerHTML=result.cloud_pct;
        temp3.innerHTML=result.temp;
        feels_like3.innerHTML=result.feels_like;
        humidity3.innerHTML=result.humidity;
        min_temp3.innerHTML=result.min_temp;
        max_temp3.innerHTML=result.max_temp;
        wind_speed3.innerHTML=result.wind_speed;
        wind_degrees3.innerHTML=result.wind_degrees;
        sunrise3.innerHTML=result.sunrise;
        sunset3.innerHTML=result.sunset;


    } 
    catch (error) {
        console.error(error);
    }
}
func3()
const func4=async()=>{
    try {
        // const response = await fetch(url+'kolkata', options);
        const result = await response.json();
        console.log(result);
        // cityname.innerHTML=city;
        // cloud.innerHTML=result.cloud_pct;
        // tempp.innerHTML=result.temp;
        // wind.innerHTML=result.wind_speed;
        cloud_pct4.innerHTML=result.cloud_pct;
        temp4.innerHTML=result.temp;
        feels_like4.innerHTML=result.feels_like;
        humidity4.innerHTML=result.humidity;
        min_temp4.innerHTML=result.min_temp;
        max_temp4.innerHTML=result.max_temp;
        wind_speed4.innerHTML=result.wind_speed;
        wind_degrees4.innerHTML=result.wind_degrees;
        sunrise4.innerHTML=result.sunrise;
        sunset4.innerHTML=result.sunset;


    } 
    catch (error) {
        console.error(error);
    }
}
func4()
const func5=async()=>{
    try {
        // const response = await fetch(url+'vancouver', options);
        const result = await response.json();
        console.log(result);
        // cityname.innerHTML=city;
        // cloud.innerHTML=result.cloud_pct;
        // tempp.innerHTML=result.temp;
        // wind.innerHTML=result.wind_speed;
        cloud_pct5.innerHTML=result.cloud_pct;
        temp5.innerHTML=result.temp;
        feels_like5.innerHTML=result.feels_like;
        humidity5.innerHTML=result.humidity;
        min_temp5.innerHTML=result.min_temp;
        max_temp5.innerHTML=result.max_temp;
        wind_speed5.innerHTML=result.wind_speed;
        wind_degrees5.innerHTML=result.wind_degrees;
        sunrise5.innerHTML=result.sunrise;
        sunset5.innerHTML=result.sunset;


    } 
    catch (error) {
        console.error(error);
    }
}
func5()


submit.addEventListener("click",(e) =>{
e.preventDefault();
func(city.value)
})
func("Delhi")