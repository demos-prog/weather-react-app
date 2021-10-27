import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./null_styles.css";
import "./App.css";
import ButtonsGroup from "./components/buttonsGroup";
import WeatherToday from "./components/weatherToday";
import AdvancedForecast from "./components/advancedForecast";
import loader from "./components/images/Spinner-3.gif";
const Forecast = React.lazy(() => import("./components/forecast"));

const apiKey = "9e6fddaaf5b8444ab06132321210710";

function App() {
  const [city, setCity] = useState(localStorage.getItem("city") || "Minsk");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");
  const [forecast, setForcast] = useState([]);
  const [url, setUrl] = useState("/" + city);

  const loadComp = (
    <div className="loaderWrap">
      <img id="loader" src={loader} alt="Loading"></img>
    </div>
  );

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
      );
      if (res.ok) {
        return await res.json();
      }
    }

    getData().then((data) => {
      if (data) {
        setTemp(data.current.temp_c);
        setHumidity(data.current.humidity);
        setDescription(data.current.condition.text);
        setForcast(data.forecast.forecastday);
      }
    });
  }, [city]);

  return (
    <Router>
      <header>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to={url}>
          Advanced forecast
        </Link>
      </header>
      <main>
        <Switch>
          <Route path={url}>
            <AdvancedForecast apiKey={apiKey} />
          </Route>
          <Route path="/">
            <ButtonsGroup setUrl={setUrl} setCity={setCity} />
            <WeatherToday
              city={city}
              temp={temp}
              humidity={humidity}
              description={description}
            />
            <Suspense fallback={loadComp}>
              <Forecast forecast={forecast} />
            </Suspense>
            <div>
              <a
                style={{ marginLeft: 50 }}
                rel="noreferrer"
                target="_blank"
                href="https://www.weatherapi.com"
              >
                API LINK
              </a>
            </div>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
