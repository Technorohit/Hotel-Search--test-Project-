import React, { useEffect } from "react";
import Cities from "../../Cities.json";
import Hotel from "../../asset/hotel.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { getHotels } from "../../Module/Search/Search.action";
import ResortImg from '../../asset/resort.png';
import LocationImg from '../../asset/location.png';

import "./style.css";

export default function Search() {
  const [selectedCity, setSelectedCity] = React.useState("");
  const [itemToRender, setItemToRender] = React.useState({});
  const Hotels = useSelector((state) => state.search.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Hotels.length === 0) {
      dispatch(getHotels());
    }

    if (selectedCity !== "" && selectedCity.length > 2) {
      const cityResult = Cities.filter((city) =>
        city.toLowerCase().match(selectedCity.toLowerCase())
      );
      let hotelResult = [];
      try {
        hotelResult = Hotels.filter((hotel) =>
          hotel.location.toLowerCase().match(selectedCity.toLowerCase())
        ).map((hotel) => hotel.name+", "+hotel.location);
        let itemToRender = {
          hotels: hotelResult,
          location: cityResult,
        };
        setItemToRender(itemToRender);
      } catch (e) {}
    } else {
      setItemToRender({});
    }
  }, [selectedCity]);

  return (
    <div className="search-container" style={{ background: Hotel }}>
      <div className="search-bar">
        <input
          id="search-place"
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
          placeholder="Where do you wanna go ?"
        />
        <div className="city-dropdown-container">
          {Object.keys(itemToRender).length > 0 && (
            <div
              style={{
                background: "lightgrey",
                fontSize: "16px",
                textAlign: "left",
                padding: "10px",
                fontWeight: 600,
              }}
            >
              Location
            </div>
          )}
          {itemToRender.location &&
            itemToRender.location.map((loc) => (
              <div
                className="city-dropdown"
                onClick={(e) => {
                  setSelectedCity(e.target.textContent);
                }}
              >
                <img src={LocationImg} style={{marginRight:'10px'}} alt=""/>{loc}
              </div>
            ))}
          {Object.keys(itemToRender).length > 0 && (
            <div
              style={{
                background: "lightgrey",
                fontSize: "16px",
                textAlign: "left",
                padding: "10px",
                fontWeight: 600,
              }}
            >
              Hotel
            </div>
          )}
          {itemToRender.hotels &&
            itemToRender.hotels.map((hotel) => (
              <div
                className="city-dropdown"
                onClick={(e) => {
                  setSelectedCity(e.target.textContent);
                }}
              >
                <img src={ResortImg} style={{marginRight:'10px'}} alt=""/>{hotel}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
