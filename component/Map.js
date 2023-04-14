import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  StreetViewPanorama,
} from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "40rem",
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA6Isl6rcuvUpvIx6t95BcNb68j_vKCRsE",
  });

  const [lat, setLat] = useState([]);
  // const [Long, setLong] = useState([])

  // let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getLocationApi = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_LOCATION}location/manager`, config)
      .then((res) => {
        setLat(res?.data?.data);
      });
  };

  const [map, setMap] = React.useState(null);

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [viewStreet, setViewStreet] = useState(false);
  const [selectedStreet, setSelectedStreet] = useState({});

  const markers = [{ lng: -83.989308, lat: 40.741895, state: "Terminal 1" }];
  console.log(markers);

  useEffect(() => {
    getLocationApi();
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {markers?.map((item) => {
          return (
            <>
              <Marker
                position={{ lat: item?.lat, lng: item?.lng }}
                icon={"https://img.icons8.com/fluency/48/null/maps.png"}
                onClick={() => {
                  setViewStreet(true);
                  setSelectedStreet(item);
                  // console.log(
                  //   selectedStreet?.lat,
                  //   selectedStreet?.lng,
                  //   viewStreet
                  // );
                }}
              />
              {/* <InfoWindow
                      onLoad={onLoad2}
                      position={{ lat: item?.lat, lng: item?.lng }}
                    >
                      <div>
                        <h1>{item?.state}</h1>
                      </div>
                    </InfoWindow> */}
              {viewStreet && (
                <StreetViewPanorama
                  options={{
                    /*   inksControl: false,
                          panControl: false,
                          enableCloseButton: false, */
                    visible: viewStreet,
                  }}
                  id="street-view"
                  position={{
                    lat: selectedStreet?.lat,
                    lng: selectedStreet?.lng,
                  }}
                  onCloseClick={() => setViewStreet(false)}
                />
              )}
            </>
          );
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);

// const token =
//   typeof window !== "undefined" ? localStorage.getItem("token") : null;

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

// const getLocationApi = async () => {
//   await axios
//     .get(`${process.env.NEXT_PUBLIC_API_LOCATION}location/manager`, config)
//     .then((res) => {
//       setLat(res?.data?.data);
//     });
// };
