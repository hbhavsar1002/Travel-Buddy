import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import { getPlacesData } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //using method lifting state up
  const [childClicked, setChildClicked] = useState(null);

  // let places = [""]

  useEffect(() => {
    //this will provide the users location and set the google map to this location
    //empty dependency because we want to use this code only once at the start
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log("setting default coordinates");
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (coordinates?.lat && coordinates?.lng && bounds.sw && bounds.ne) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        const filteredData = data.filter(
          (place) => place.location_id && place.name
        );

        //console.log("data",data);
        setPlaces(filteredData);
        setIsLoading(false);
      });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <div className="flex flex-col sm:h-screen">
        <Header />
        <div className="flex flex-col sm:flex-row gap-5 overflow-hidden flex-grow">
          <div className="w-full mb-5 sm:mb-0 sm:w-full lg:w-[35%]">
            <List
              places={places}
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </div>
          <div className="w-full sm:w-full lg:w-[65%]">
            {coordinates?.lat && coordinates?.lng && (
              <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                setChildClicked={setChildClicked}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
