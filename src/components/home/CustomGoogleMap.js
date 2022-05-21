import {useLoadScript, GoogleMap, Marker} from '@react-google-maps/api'
import {useMemo} from "react";

export default function CustomGoogleMap() {
  const {isLoaded} = useLoadScript({
    id: 'home-google-map',
    googleMapsApiKey: 'AIzaSyDpgUIiZnuQF2sZjYHDvSbLiSA2YDsJ67A',
  });

  if (!isLoaded) return <div>loading...</div>

  return (
    <Map/>
  )
}

function Map() {
  const center = useMemo(() =>( {lat: 10.244260144149326, lng: -68.00824998890928} ), [])
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName='google-map-container'>
      <Marker position={center}/>
    </GoogleMap>
  )

}
