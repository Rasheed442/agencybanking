import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MyComponent() {
  const { isLoaded } = {
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA6Isl6rcuvUpvIx6t95BcNb68j_vKCRsE",
  };

  const containerStyle = {
    width: "100%",
    height: "700px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyA6Isl6rcuvUpvIx6t95BcNb68j_vKCRsE">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default React.memo(MyComponent);
// AIzaSyA6Isl6rcuvUpvIx6t95BcNb68j_vKCRsE;
