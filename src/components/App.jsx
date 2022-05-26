import React, { useState } from "react";
import Search from "./Search";
import Card from "./Card";

function App() {
  const [dataset, setdata] = useState({
    main: "Sunny",
    high: 3,
    low: 5,
    icon: "",
    country: "CA",
    city: "Toronto",
    humidity: 50,
    temp: 17,
    feelslike: 16,
    pressure: 1001,
    sunrise: 1011019219,
    sunset: 1231231233,
  });

  const [foundcity, setfoundcity] = useState(false);
  // function geoFindMe() {
  //   var coords = {};
  //   navigator.geolocation.getCurrentPosition(success, error);
  //   function success(position) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;

  //     console.log(latitude, longitude);
  //     coords = {
  //       long: longitude,
  //       lat: latitude,
  //     };

  //     getWeatherDataCoords(coords);
  //   }

  //   function error() {
  //     console.log("error");
  //   }
  // }

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function getWeatherDataCoords(city) {
    const apirul =
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      city.lat +
      "&lon=" +
      city.long +
      "&units=metric&appid=b820c3126ad2a286b1e479513b3132d0";
    fetch(apirul)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod == 400) {
        } else {
          let unix = data.sys.sunrise;
          let sunr = new Date(unix * 1000);
          let unix2 = data.sys.sunset;
          let suns = new Date(unix2 * 1000);
          const datagot = {
            main: data.weather[0].main,
            high: Math.round(data.main.temp_max),
            low: Math.round(data.main.temp_min),
            icon: data.weather[0].icon,
            country: data.sys.country,
            city: data.name,
            temp: Math.round(data.main.temp),
            feelslike: Math.round(data.main.feels_like),
            sunrise: formatAMPM(sunr),
            sunset: formatAMPM(suns),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
          };
          setdata(datagot);
          console.log(datagot.main);
        }
      });
    setfoundcity(true);
  }

  function getWeatherData(city) {
    const apirul =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=b820c3126ad2a286b1e479513b3132d0";
    fetch(apirul)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod == 400) {
        } else {
          let unix = data.sys.sunrise;
          let sunr = new Date(unix * 1000);
          let unix2 = data.sys.sunset;
          let suns = new Date(unix2 * 1000);
          const datagot = {
            main: data.weather[0].main,
            high: Math.round(data.main.temp_max),
            low: Math.round(data.main.temp_min),
            icon: data.weather[0].icon,
            country: data.sys.country,
            city: data.name,
            temp: Math.round(data.main.temp),
            feelslike: Math.round(data.main.feels_like),
            sunrise: formatAMPM(sunr),
            sunset: formatAMPM(suns),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
          };
          setdata(datagot);
          console.log(datagot.main);
        }
      });
    setfoundcity(true);
  }
  const getInputValue = (event) => {
    // show the user input value to console
    const userValue = event.target.value;

    console.log(userValue);

    getWeatherData(userValue);
    if (userValue === "") {
      setfoundcity(false);
    }
  };

  const geoFindMe = () => {
    var coords = {};
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude, longitude);
      coords = {
        long: longitude,
        lat: latitude,
      };

      getWeatherDataCoords(coords);
    }

    function error() {
      console.log("error");
    }
  };
  window.onload = function () {
    document.getElementById("locatepress").onclick = function () {
      geoFindMe();
    };
  };

  return (
    <div className="back">
      <div className="searchdiv">
        <input
          type="text"
          placeholder="Search for a City"
          id="searchbar"
          onChange={getInputValue}
        ></input>
        <button className="locatebutton" id="locatepress">
          <i class="bi bi-geo-alt-fill"></i> Locate Me
        </button>
      </div>
      {foundcity && <Card data={dataset} />}
    </div>
  );
}

export default App;
