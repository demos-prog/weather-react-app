import { useEffect, useState } from "react";
import "./null_styles.css";
import "./App.css";
import ButtonsGroup from "./components/buttonsGroup";
import Forecast from "./components/forecast";
import WeatherToday from "./components/weatherToday";

const apiKey = "9e6fddaaf5b8444ab06132321210710";

function App() {
  const [city, setCity] = useState(localStorage.getItem("city") || "Minsk");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");
  const [forecast, setForcast] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
      );
      return await res.json();
    }
    getData().then((data) => {
      setTemp(data.current.temp_c);
      setHumidity(data.current.humidity);
      setDescription(data.current.condition.text);
      setForcast(data.forecast.forecastday);
    });
  }, [city]);

  return (
    <div>
      <main>
        <ButtonsGroup setCity={setCity} />
        <WeatherToday
          city={city}
          temp={temp}
          humidity={humidity}
          description={description}
        />
        <Forecast forecast={forecast} />
      </main>
    </div>
  );
}

export default App;
