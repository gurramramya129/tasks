import React, { useState } from "react";
import axios from "axios";

const CountryAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${value}`
      );

      if (response.data) {
        const countries = response.data.map((country) => country.name);
        setSuggestions(countries);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (country) => {
    setSearchTerm(country);
    setSuggestions([]);
  };

  return (
    <div className="autocomplete">
      <label htmlFor="country-input">Country:</label>
      <input
        type="text"
        id="country-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((country, index) => (
          <li key={index} onClick={() => handleSuggestionClick(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryAutocomplete;
