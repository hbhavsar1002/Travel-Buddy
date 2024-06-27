import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  console.log(process.env.RAPIDAPI_KEY)
  let URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    const options = {
      // since we are using axios the method will by default be 'GET'
      // method: 'GET',
      // url: URL,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    };
    //const data =""
    const response = await axios.get(URL, options);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching places data:", error);
    throw error;
  }
};

export const getWashroomLocationData = async (coordinates) => {
  try {
    const options = {
      params: {
        lat: coordinates.lat,
        lng: coordinates.lng,
        page: "1",
        per_page: "20",
      },
      headers: {
        "x-rapidapi-key": "2fd06344cdmsh6212c9232dc4f59p1381c2jsn8f70de40b4b0",
        "x-rapidapi-host": "public-bathrooms.p.rapidapi.com",
      },
    };
    const response = await axios.get(
      "https://public-bathrooms.p.rapidapi.com/location",
      options
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
