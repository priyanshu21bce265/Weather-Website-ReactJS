import React, { useEffect } from "react";
// import sunny from 'D:\react_projs\first\public\sunny.jpg'
// import sunny from suuny.jpg

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          document.body.style.backgroundImage = `url("rainy.jpg")`;
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 
          // document.body.style.backgroundImage = `url(${mist.jpg})`;
          break;
          case "Rain":
          setWeatheState("wi-day-cloudy");
          document.body.style.backgroundImage = `url("rainy.jpg")`;
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 
          // document.body.style.backgroundImage = `url(${mist.jpg})`;
          break;
        case "Haze":
          setWeatheState("wi-fog");
          document.body.style.backgroundImage = `url("mist.jpg")`;
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          document.body.style.backgroundImage = `url("sunny.jpg")`;
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 

          break;
        case "Mist":
          setWeatheState("wi-dust");
          document.body.style.backgroundImage = `url("mist.jpg")`;
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 
          break;

        default:
          setWeatheState("wi-day-sunny");
          document.body.style.backgroundImage = `url("sunny.jpg")`;
          document.body.style.backgroundRepeat = 'no-repeat';
          document.body.style.backgroundSize = 'cover'; 
          document.body.style.backgroundPosition = 'center'; 
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
