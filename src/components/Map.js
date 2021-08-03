import {React, useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({data, center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = data.map(event => {
        if(event.categories[0].id === 12){
            let marker = []
            if(event.geometries[0].coordinates[0].length > 2){
                for(let i=0; i < event.geometries[0].coordinates[0].length; i++){
                    marker.push(<Marker lat={event.geometries[0].coordinates[0][i][1]} lng={event.geometries[0].coordinates[0][i][0]} 
                    onClick={() => setLocationInfo({id: event.id, title: event.title})}/>)
                }
                return marker;
            }
            return <Marker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({id: event.id, title: event.title})}/>
        }
        return null;
    })

    return (
        <div className="map">
           <GoogleMapReact
                bootstrapURLKeys={{key:process.env.REACT_APP_API}}
                defaultCenter={center}
                defaultZoom={zoom}
           >
               {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />} 
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 15.7835,
        lng: -90.2308
    },
    zoom:4
}

export default Map
