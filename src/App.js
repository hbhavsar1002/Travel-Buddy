import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import { getPlacesData, getWashroomLocationData } from "./api";
import { useEffect, useState } from "react";


function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("default");
  const [rating, setRating] = useState("default");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [restrooms, setRestrooms] = useState([]);

  //using method lifting state up because we have lifted this from Map.jsx
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    //this will provide the users location and set the google map to this location
    //empty dependency because we want to use this code only once at the start
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (coordinates.lat && coordinates.lng && type === "toilets") {
      setIsLoading(true);
      getWashroomLocationData(coordinates).then((data) => {
        setRestrooms(data);
        setIsLoading(false);
      });
    } else {
      return;
    }
  }, [type, coordinates]);

  useEffect(() => {
    if (type === "default" || type === "toilets") {
      return;
    }
    setIsLoading(true);
    if (bounds.sw && bounds.ne) {
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        const filteredData = data.filter((place) => place?.name);
        setPlaces(filteredData);
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  useEffect(() => {
    if (rating === "default") {
      return;
    }
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  return (
    <>
      <div className="flex flex-col sm:h-screen">
        <Header setCoordinates={setCoordinates} />
        <div className="flex flex-col sm:flex-row gap-5 overflow-hidden flex-grow">
          <div className="w-full mb-5 sm:mb-0 sm:w-full lg:w-[35%]">
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              restrooms={restrooms}
            />
          </div>
          <div className="w-full sm:w-full lg:w-[65%]">
            {coordinates?.lat && coordinates?.lng && (
              <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={filteredPlaces.length ? filteredPlaces : places}
                setChildClicked={setChildClicked}
                type={type}
                restrooms={restrooms}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
