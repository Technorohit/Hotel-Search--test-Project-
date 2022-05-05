import React from "react";
import "./style.css";
import LocationImg from '../../asset/location.png';

export const HotelDetails = React.memo((props) => {
  console.log(props);
  return (
    <div className="hotel-container">
      <div className="hotel-img">
        <img className="hotel-spotlight" src={props.poster} alt="" />
      </div>
      <div className="hotel-info">
          <div className="hotel-name">{props.name}</div>
          <div className="hotel-city"><img className="hotel-city-icon" src={LocationImg} alt=""/>{props.city}</div>
          <div className="hotel-rating">{props.rating}</div>
          <div className="hotel-description">{props.descripition}</div>
          <div className="book"><div className="discount">Pay now and get {props.discount}Rs discount</div> <div className="BookNow">Book Now at {props.price}</div></div>
      </div>
    </div>
  );
});
