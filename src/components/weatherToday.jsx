import "./WeatherToday.css";

export default function WeatherToday({ city, temp, humidity, description }) {
  return (
    <div className="wrapperWeatherToday">
      <div className="contetntWeatherToday">
        <div>Weather today</div>
        <div className="descr">
          <h1>{city}</h1>
        </div>
        <div>
          <h2>{description}</h2>
          <div>temperature: {temp} &deg;C</div>
          <div>humidity: {humidity} RH</div>
        </div>
      </div>
    </div>
  );
}
