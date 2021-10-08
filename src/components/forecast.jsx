import { nanoid } from "nanoid";
import "./forecast.css";

export default function Forecast({ forecast }) {
  console.log(forecast[0]);
  return (
    <div className="forcastWR">
      <h2 className="forecastTitle">Weather forecast</h2>
      <div className="forecastWrapper">
        {forecast.map((day) => {
          return (
            <div className="forecastDayWrapper" key={nanoid()}>
              <div>Date: {day.date}</div>
              <div>Max temperature: {day.day.maxtemp_c} &deg;C</div>
              <div>Min temperature: {day.day.mintemp_c} &deg;C</div>
              <div>Chance of rain: {day.day.daily_chance_of_rain} %</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
