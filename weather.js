/* function change(){
    //alert('haii kutta')
    event.preventDefault()
    
    //result.style.background='yellow'
    //document.body.style.backgroundImage = "url('images/raining.jpg')";
} */
class Weatherhub{
    change(){
    
    let cityname = inputname.value
    //console.log(cityname);
        if(cityname){
            fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=20c2260d9a8b2dc19d00262c6fbe9767`).then((response)=>{
                console.log(response.json().then((cities)=>{
                    console.log(cities);
                    let name=cities.name
                    console.log(name);
                    /* cities.weather.forEach(item => {
                        console.log(item.main)
                    });
                    cities.weather.forEach(item => {
                        console.log(item.description)
                    }); */
                    let cloudcondition =cities.weather[0].main
                    console.log(cloudcondition);
                    let clouddesc =cities.weather[0].description
                    console.log(clouddesc);
                    let latitude = cities.coord.lat
                    console.log(latitude);
                    let longitude = cities.coord.lon
                    console.log(longitude);
                    let windspeed = cities.wind.speed
                    console.log(windspeed);
                    let winddeg = cities.wind.deg
                    console.log(winddeg);
                    let countryname = cities.sys.country
                    console.log(countryname);
                    let pressure = cities.main.pressure
                    console.log(pressure);
                    let humidity = cities.main.humidity
                    console.log(humidity);
                    /* let sealevel = cities.main.sea_level
                    console.log(sealevel);
                    let grndlevel = cities.main.grnd_level
                    console.log(grndlevel); */
                    let temperature =cities.main.temp /* (parseFloat(cities.main.temp)-273.15) */
                    console.log(temperature);

                    if(cloudcondition=='Clear sky'){
                        //document.body.style.animationPlayState="paused"
                        document.body.style.backgroundImage = "url('images/clearsky.jpg')";
                    }
                    else if(cloudcondition=='Clear'){
                        document.body.style.backgroundImage = "url('images/clearsky.jpg')";
                    }
                    else if(cloudcondition=='Clouds'){
                        //document.body.style.animationPlayState="paused"
                        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
                    }
                    else if(cloudcondition=='Rain'){
                        document.body.style.backgroundImage = "url('images/raining.jpg')";
                    }
                    else if(cloudcondition=='Thunderstorm'){
                        document.body.style.backgroundImage = "url('images/thunder.jpg')";
                    }
                    else if(cloudcondition=='Haze'){
                        //document.body.style.animationPlayState="paused"
                        document.body.style.backgroundImage = "url('images/foggy.jpg')";
                    }
                    else if(cloudcondition=='Snow'){
                        document.body.style.backgroundImage = "url('images/snow.jpg')";
                    }
                    else if(cloudcondition=='Smoke'){
                        document.body.style.backgroundImage = "url('images/smoke.jpg')";
                    }
                    else if(cloudcondition=='Mist'){
                        document.body.style.backgroundImage = "url('images/mist.jpg')";
                    }

                    result.innerHTML=`
                    <div class="weather-result p-5">
                        <div class="text-light">
                            <div class="d-flex">
                                <span class="temp">${parseInt(temperature)}°c</span>
                                <div class="ms-5 d-flex align-items-center justify-content-center">
                                    <div>
                                        <h4 class="mt-4"><i class="fa-solid fa-cloud" style="color: #ffffff;"> </i> ${cloudcondition}</h4>
                                        <p>${clouddesc}</p>
                                    </div>
                                </div>
                            </div>
                            <h1 class=""><i class="fa-solid fa-map-location-dot" style="color: #ffffff;"></i> ${name}</h1>
                            <h3><i class="fa-solid fa-earth-americas" style="color: #ffffff;"></i> ${countryname}</h3>
                        </div>
                        <div class="weather-conditions text-center text-dark row rounded">
                        <div class="col-3">
                            <div class="bg-light rounded">
                                <i class="fa-solid fa-wind" style="color: #000000;"></i>
                                <h6 class="conditions p-2"></i>Wind speed</h6>
                            </div>
                            <span class="text-light">${windspeed} Km/h</span>
                        </div>
                        <div class="col-3">
                            <div class="bg-light rounded">
                                <i class="fa-solid fa-droplet" style="color: #000000;"></i>
                                <h6 class="conditions p-2"></i>Humidity</h6>
                            </div>
                            <span class="text-light">${humidity} %</span>
                        </div>
                        <div class="col-3">
                            <div class="bg-light rounded">
                                <i class="fa-regular fa-compass" style="color: #000000;"></i>
                                <h6 class="conditions p-2"></i>Latitude</h6>
                            </div>
                            <span class="text-light">${latitude} ϕ</span>
                        </div>
                        <div class="col-3">
                            <div class="bg-light rounded">
                                <i class="fa-regular fa-compass" style="color: #000000;"></i>
                                <h6 class="conditions p-2"></i>Longitude</h6>
                            </div>
                            <span class="text-light">${longitude} λ</span>
                        </div>
                        </div>
                    </div>
                    `
                }));
            }).catch((error)=>{
                console.log(error);
            })
        }
        else{
            alert('Enter a valid input')
        }
    }
    
    }
    wobj=new Weatherhub()