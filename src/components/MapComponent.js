import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapContainer = ({ children, center, zoom }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={zoom}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
