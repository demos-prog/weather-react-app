import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import "./advancedForecast.css";

export default function AdvancedForecast({ apiKey }) {
  const [newCity, setNewCity] = useState(window.location.pathname.slice(1));
  const [inputValue, setInputValue] = useState("");
  const [forecast, setForcast] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${newCity}&days=3`
      );
      return await res.json();
    }
    getData().then((data) => {
      setForcast(data.forecast.forecastday);
    });
  }, [newCity, apiKey]);

  function handleSubmit(e) {
    e.preventDefault();
    setNewCity(
      inputValue.slice(0, 1).toUpperCase() +
        inputValue.slice(1).toLocaleLowerCase()
    );
    setInputValue("");
  }

  return (
    <div id="wrp">
      <h1>{newCity}</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{margin: 20}}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          label="Enter the name of the city"
          variant="standard"
        />
      </form>
      <div className="wrpCont">
        {forecast.map((day) => {
          return (
            <div key={nanoid()} className="advForcWrap">
              <div>
                <b>{day.date}</b>
              </div>
              <div>
                {day.hour.map(({ temp_c }, index) => {
                  return (
                    <div key={nanoid()}>
                      At <b>{index + 1}</b> o'clock temperature is{" "}
                      <b>{temp_c} &deg;C</b>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
