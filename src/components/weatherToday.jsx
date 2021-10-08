import "./WeatherToday.css";

export default function WeatherToday({ city, temp, humidity, description }) {
  return (
    <div className="wrapperWeatherToday">
      <div className="contetntWeatherToday">
        <div className="descr">
          <h1>{city}</h1>
        </div>
        <div>
          <h2>
            <b>{description}</b>
          </h2>
          <div>
            temperature: <b>{temp} &deg;C</b>
          </div>
          <div>
            humidity: <b>{humidity} RH</b>
          </div>
        </div>
      </div>
    </div>
  );
}
