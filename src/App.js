import { useEffect, useState } from "react";
import * as weather from "openweather-apis";
import "./null_styles.css";
import "./App.css";
import ButtonsGroup from "./components/buttonsGroup";
import WeatherToday from "./components/weatherToday";

const apiKey = "f70ad6074fa13b00157e997a81cc4525";

function App() {
  const [city, setCity] = useState(localStorage.getItem("city") || "Minsk");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");

  weather.setLang("en");
  weather.setUnits("metric");
  weather.setAPPID(apiKey);

  useEffect(() => {
    weather.setCity(city);

    weather.getSmartJSON(function (err, obj) {
      setTemp(obj.temp);
      setHumidity(obj.humidity);
      setDescription(obj.description);
    });
    weather.getWeatherForecastForDays(3, function(err, obj){
      console.log(obj);
    });
  }, [city]);

 

  return (
    <div>
      <main>
        <ButtonsGroup setCity={setCity} />
        <div className="contentWrapper">
          <WeatherToday
            city={city}
            temp={temp}
            humidity={humidity}
            description={description}
          />
        </div>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          clear
        </button>
      </main>
    </div>
  );
}

export default App;
