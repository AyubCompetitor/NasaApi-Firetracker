import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import LocationMarker from './LocationMarker';
import FetchEvents from '../service/FetchEvents';
import generateRandomString from '../utils/generateRandomKey';
import RequestLoader from './RequestLoader';
import LocationInfoBox from './LocationInfoBox';

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ center, zoom }) => {
	const { eventData, loading } = FetchEvents();
	const [locationInfo, setLocationInfo] = useState(null);

	const markers = eventData.map((event, index) => {
		if (event.categories[0].id === NATURAL_EVENT_WILDFIRE) {
			return (
				<LocationMarker
					key={generateRandomString()}
					lat={event.geometries[0].coordinates[1]}
					lng={event.geometries[0].coordinates[0]}
					onClick={() =>
						setLocationInfo({ id: event.id, title: event.title })
					}
				/>
			);
		}
		return null;
	});

	return (
		<div className='map'>
			{loading ? (
				<RequestLoader />
			) : (
				<GoogleMapReact
					bootstrapURLKeys={{ key: '' }} // your google maps api key
					defaultCenter={center}
					defaultZoom={zoom}
				>
					{markers}
				</GoogleMapReact>
			)}
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8756,
	},
	zoom: 6,
};

export default Map;
