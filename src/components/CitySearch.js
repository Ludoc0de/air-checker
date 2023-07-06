import { useState } from "react";

export const CitySearch = ({ getAirQuality }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formattedCity = inputValue.replace(/ /g, "-");
    getAirQuality(formattedCity);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
