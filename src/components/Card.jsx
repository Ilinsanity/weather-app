import React, { useState } from "react";

function Card(props) {
  return (
    <div className="topcont">
      <div className="row">
        <div className="col-6 one">
          <div>
            <h1 className="oneheading">
              {props.data.city}, {props.data.country}
            </h1>
            <a>
              {" "}
              <i class="fa fa-sun fa-6x fa-spin"></i>{" "}
              <p className="temperat">{props.data.temp}°</p>
            </a>

            <h2 className="condition">{props.data.main}</h2>
          </div>
        </div>
        <div className="col-6 two">
          <h4 className="feels">Feels like: {props.data.feelslike}</h4>
          <div className="row lowhigh">
            <div className="col">
              <i class="fa fa-caret-up fa-2x"></i>
              <p className="highlow">{props.data.high}°</p>
            </div>
            <div className="col">
              <i class="fa fa-caret-down fa-2x"></i>
              <p className="highlow">{props.data.low}°</p>
            </div>
          </div>
          <div className="row humpre">
            <div className="col">
              <p>Humidity: {props.data.humidity}%</p>
            </div>
            <div className="col">
              <p>Pressure: {props.data.pressure}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <i class="bi bi-sunrise sun"></i>
                <p>{props.data.sunrise}</p>
            </div>
            <div className="col">
            <i class="bi bi-sunset sun"></i>
            <p>{props.data.sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
