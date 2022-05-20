import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import * as React from "react";
import CustomTileWithoutChart from "../ui-components/CustomTileWithoutChart";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { EditIcon } from "@chakra-ui/icons";
import { FaSave } from "react-icons/fa";
import { walterFedyBlue } from "../../utils/constants";
import { Decimal } from "@prisma/client/runtime";
import { Prisma } from "@prisma/client";
import axios from "axios";
import { Decimal as JSDecimal } from "decimal.js";

interface ILocationInformationProps {
  libraries: any;
  lat: Decimal | null;
  lng: Decimal | null;
  address: string | null;
  projectNumber: string;
}

const LocationInformation: React.FunctionComponent<
  ILocationInformationProps
> = ({ libraries, lat, lng, address, projectNumber }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };

  const [editing, setEditing] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [center, setCenter] = React.useState<any>({
    lat: lat ? parseFloat(lat.toString()) : 43.4422764,
    lng: lng ? parseFloat(lng.toString()) : -80.4958428,
    address: address,
  });

  console.log(center);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBd4vn5nmYUTEaoT_15iXlSzryic5gZWlg",
    libraries,
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] = React.useState<any>(null);
  // const onLoad = React.useCallback((map: google.maps.Map) => {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   map.setZoom(20);
  //   setMap(() => map);
  // }, []);

  const placesOnLoad = (autocomplete: any) => {
    setAutocomplete((prev: any) => autocomplete);
  };

  const onPlaceChange = () => {
    if (!!autocomplete) {
      console.log(autocomplete.getPlace());
      const place = autocomplete.getPlace();
      setCenter((prev: any) => ({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        address: place.formatted_address,
      }));
    }
  };

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <CustomTileWithoutChart>
      <Flex
        height="50px"
        align="center"
        borderBottom={`${walterFedyBlue} 2px solid`}
        bgColor={walterFedyBlue}
        pb={4}
      >
        <Flex w="100%" justify="space-between">
          <Text
            as="h3"
            fontSize="1.2rem"
            fontWeight="bold"
            color="white"
            my="auto"
          >
            Location
          </Text>
          {!editing && (
            <IconButton
              aria-label="Edit"
              size="sm"
              icon={<EditIcon />}
              onClick={() => {
                setEditing(true);
                if (inputRef) {
                  inputRef.current?.focus();
                }
              }}
            />
          )}
          {editing && (
            <IconButton
              aria-label="Save"
              size="sm"
              icon={<Icon as={FaSave} />}
              onClick={() => {
                setEditing(false);
                axios.post(`/api/user/26073/projects/${projectNumber}`, {
                  Latitude: new Prisma.Decimal(center.lat),
                  Longitude: new Prisma.Decimal(center.lng),
                  Address: center.address,
                });
              }}
            />
          )}
        </Flex>
      </Flex>
      <Box height="400px" borderRadius="10px">
        {/* <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyBd4vn5nmYUTEaoT_15iXlSzryic5gZWlg"
          libraries={libraries}
        > */}
        {isLoaded && (
          <GoogleMap
            id="google-map-script"
            mapContainerStyle={containerStyle}
            center={{ lat: center.lat, lng: center.lng }}
            zoom={17}
            // onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={{ lat: center.lat, lng: center.lng }} />

            <Autocomplete onLoad={placesOnLoad} onPlaceChanged={onPlaceChange}>
              <input
                type="text"
                ref={inputRef}
                placeholder={
                  editing
                    ? "Please enter a new address"
                    : address || "675 Queen St S #111, Kitchener, ON N2M 1A1"
                }
                disabled={!editing}
                style={{
                  boxSizing: `border-box`,
                  border: `1px solid transparent`,
                  width: `240px`,
                  height: `32px`,
                  padding: `0 12px`,
                  borderRadius: `3px`,
                  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                  fontSize: `14px`,
                  outline: `none`,
                  textOverflow: `ellipses`,
                  position: "absolute",
                  left: "50%",
                  bottom: editing ? "50%" : "20px",
                  marginLeft: "-120px",
                  backgroundColor: "white",
                  transition: "all 0.5s ease",
                }}
              />
            </Autocomplete>
          </GoogleMap>
        )}
      </Box>
    </CustomTileWithoutChart>
  );
};

export default React.memo(LocationInformation);
