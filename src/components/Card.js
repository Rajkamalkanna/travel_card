import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="details">
      <div className="view-point">
        <img src={props.img} alt="place icon" width="40%" />
      </div>
      <div className="lable">
        <div className="location-tag">
          <img
            src="./image/location.png"
            alt="map icon"
            width="20px"
            height="20px"
          />
          <p>{props.country}</p>
          <p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              {props.view}
            </a>
          </p>
        </div>
        <div className="description">
          <h1>{props.place}</h1>
          <p>{props.date}</p>
          <p className="words">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
