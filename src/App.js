import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import { getPlacesData } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ne:0, nw:0, se:0,sw:0});

  //empty dependency because we want to use this code only once at the start
  useEffect(()=>{
    //this will provide the users location and set the google map to this location
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat: latitude, lng: longitude})
    })
  },[])

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <div className="flex flex-col sm:h-screen">
      <Header />
      <div className="flex flex-col sm:flex-row gap-5 overflow-hidden flex-grow">
         <div className="w-full mb-5 sm:mb-0 sm:w-full lg:w-[35%]">
          <List places={places}/>
        </div>
        <div className="w-full sm:w-full lg:w-[65%]">
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
