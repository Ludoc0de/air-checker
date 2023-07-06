import { useState } from "react";
import { CitySearch } from "./components/CitySearch";
import "./App.css";

export default function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  console.log(airQualityData);
  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_API_TOKEN}`
      );
      const data = await response.json();
      // console.log(data);

      if (response.ok && data.status === "ok") {
        setAirQualityData(data.data);
        setError(null);
      } else {
        setError(
          "Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct. "
        );
        setAirQualityData(null);
      }
    } catch (error) {
      console.error("network error:", error);
      setError("Sorry, something went wrong");
      setAirQualityData(null);
    }
  };

  return (
    <div>
      <h1>Air quality index checker</h1>
      <CitySearch getAirQuality={getAirQuality} />
      {/* {airQualityData && <p data-testid="data">Air quality data loaded</p>} */}
      {error && <div>{error}</div>}
    </div>
  );
}
