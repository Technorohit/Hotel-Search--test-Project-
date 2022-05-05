import Header from './Components/Header/Header';
import Search from './Components/Search/Search'
import './App.css';

const google = window.google;
function initMap() {
new google.maps.LatLng(-33.867, 151.195);

}
window.initMap = initMap
function App() {
  return (
    <div className="App">
      <Header/>
        <Search/>
    </div>
  );
}

export default App;
