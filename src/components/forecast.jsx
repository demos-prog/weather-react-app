import { nanoid } from "nanoid";
import "./forecast.css";

export default function Forecast({ forecast }) {
  return (
    <div className="forcastWR">
      <h2 className="forecastTitle">Weather forecast</h2>
      <div className="forecastWrapper">
        {forecast.map((day) => {
          return (
            <div className="forecastDayWrapper" key={nanoid()}>
              <div>
                Date: <b>{day.date}</b>
              </div>
              <div>
                Max temperature: <b>{day.day.maxtemp_c} &deg;C</b>
              </div>
              <div>
                Min temperature: <b>{day.day.mintemp_c} &deg;C</b>
              </div>
              <div>
                Chance of rain: <b>{day.day.daily_chance_of_rain} %</b>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
