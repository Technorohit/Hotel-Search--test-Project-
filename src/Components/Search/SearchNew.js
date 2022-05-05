import React, { useEffect } from "react";
import Cities from "../../Cities.json";
import Hotel from "../../asset/hotel.jpeg";
import { useDispatch } from 'react-redux'
import "./style.css";


export default function Search() {
  const [selectedCity, setSelectedCity] = React.useState("");
  const [dropDownData, setDropDownData] = React.useState([]);
  const [itemToRender,setItemToRender] = React.useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCity !== "" && selectedCity.length > 2) {
      const cityResult = Cities.filter((city) =>
        city.toLowerCase().match(selectedCity.toLowerCase())
      );
      let hotelResult = [];
      try {
        fetch("https://oyo-server.herokuapp.com/hotel")
          .then((res) => res.json()).then(data=>{
            hotelResult = data.filter(hotel=>hotel.location.toLowerCase().match(selectedCity.toLowerCase())).map(hotel=>hotel.location)
            // console.log(hotelResult)
            // setDropDownData(hotelResult);
            let itemToRender = {
              hotels:hotelResult,
              location:cityResult
            }
            setItemToRender(itemToRender)
          })
      } catch (e) {}
    
      // setDropDownData(cityResult);
    } else {
      // setDropDownData([]);
    }
  }, [selectedCity]);

  return (
    <div className="search-container" style={{ background: Hotel }}>
      <div className="search-bar">
        <input
          id="search-place"
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        />
        <div className="city-dropdown-container">
          {/* {dropDownData.map((city) => (
            <div
              className="city-dropdown"
              onClick={(e) => {
                setSelectedCity(e.target.textContent);
                setDropDownData([]);
              }}
            >
              {city}
            </div>
          ))} */}
         <div style={{background:'lightgrey',fontSize:'16px',textAlign:'left',padding:'10px',fontWeight:600}}>Location</div>{itemToRender.location&&itemToRender.location.map(loc=> <div
              className="city-dropdown"
              onClick={(e) => {
                setSelectedCity(e.target.textContent);
                setDropDownData([]);
              }}
            >
              {loc}
            </div>)}
            <div style={{background:'lightgrey',fontSize:'16px',textAlign:'left',padding:'10px',fontWeight:600}}>Hotel</div>{itemToRender.hotels&&itemToRender.hotels.map(hotel=> <div
              className="city-dropdown"
              onClick={(e) => {
                setSelectedCity(e.target.textContent);
                setDropDownData([]);
              }}
            >
              {hotel}
            </div>)}
        </div>
      </div>
    </div>
  );
}
