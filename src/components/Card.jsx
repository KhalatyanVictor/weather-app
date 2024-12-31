function Card({ weather }) {
  return (
    <div className="weather-card">
      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="temperature">{weather.main.temp}°C</div>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
        alt={weather.weather[0]?.description}
      />
      <div className="description">{weather.weather[0]?.description}</div>
      <div className="details">
        <span>Humidity: {weather.main.humidity}%</span>
        <span>Wind: {weather.wind.speed} km/h</span>
      </div>
    </div>
  );
}

export default Card;
