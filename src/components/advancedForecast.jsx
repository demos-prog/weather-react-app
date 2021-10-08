import { useState } from "react";

export default function AdvancedForecast() {
  const [newCity, setNewCity] = useState(window.location.pathname.slice(1));

  return <div>{newCity}</div>;
}
