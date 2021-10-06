import "./null_styles.css";
import "./App.css";
import * as weather from 'openweather-apis'
import { useState } from "react";

const apiKey = "f70ad6074fa13b00157e997a81cc4525";

function App() {
  const [city, setCity] = useState("Minsk");

  weather.setLang('en');
	weather.setCity(city);
 	weather.setUnits('metric');
 	weather.setAPPID(apiKey);


  weather.getTemperature(function(err, temp){
		console.log(temp);
	});
  weather.getPressure(function(err, pres){
		console.log(pres);
	});

  return <div></div>;
}

export default App;
