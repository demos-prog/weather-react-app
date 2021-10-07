import "./WeatherToday.css";

export default function WeatherToday({
  city,
  temp,
  humidity,
  description,
}) {
 
  return (
    <div className="wrapperWeatherToday">
      <div className="contetntWeatherToday">
        <div className="descr">
          <h1>{city}</h1>
          <h2>{description}</h2>
        </div>
        <div>
          <div>temperature: {temp} &deg;C</div>
          <div>humidity: {humidity} RH</div>
        </div>
      </div>
    </div>
  );
}
