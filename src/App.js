import { useEffect, useState } from "react";
import * as weather from "openweather-apis";
import ButtonsGroup from "./components/buttonsGroup";
import "./null_styles.css";
import "./App.css";

const apiKey = "f70ad6074fa13b00157e997a81cc4525";

function App() {
  const [city, setCity] = useState("Minsk");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");

  weather.setLang("en");
  weather.setUnits("metric");
  weather.setAPPID(apiKey);

  useEffect(() => {
    weather.setCity(city);

    weather.getSmartJSON(function (err, smart) {
      setTemp(smart.temp);
      setHumidity(smart.humidity);
      setDescription(smart.description);
    });
  }, [city]);

  return (
    <div>
      <ButtonsGroup setCity={setCity}/>
      {temp}
    </div>
  );
}

export default App;
