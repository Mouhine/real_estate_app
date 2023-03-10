//@ts-nocheck
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { Hit } from "../types";
import { BsFillHouseFill } from "react-icons/bs";
import { useSearchContext } from "../context";

const containerStyle = {
  width: "100%",
  height: "700px",
};

// const center = {
//   lat: 24.4539,
//   lng: 54.3773,
// };

interface MapProps {
  properties: Hit[];
}
function MyComponent({ properties }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAHswYOeyZYFGkfBLegqUEi3IkD_VFQ9eU",
  });
  const { locationData } = useSearchContext();
  const [map, setMap] = React.useState(null);
  const center = {
    lat: locationData.geography.lat || 25.2048,
    lng: locationData.geography.lng || 55.2708,
  };

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      // map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {properties?.map((l) => {
        return (
          <Marker
            position={l._geoloc}
            title={l.title}
            icon={<BsFillHouseFill />}
          />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
