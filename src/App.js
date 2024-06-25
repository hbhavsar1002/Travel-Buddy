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

  useEffect(() => {
    //this will provide the users location and set the google map to this location
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getPlacesData(bounds.sw, bounds.ne);
        console.log(data); // Log the fetched data to verify it's correct
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching places data:", error);
        // Handle error state if needed
      } finally {
        setIsLoading(false); // Turn off loading indicator whether successful or not
      }
    };

    fetchData(); // Call fetchData only if bounds have been set
  }, [bounds]);

  return (
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
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
