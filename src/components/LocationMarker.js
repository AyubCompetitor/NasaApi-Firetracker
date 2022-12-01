import React from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-noto-v1/fire';

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className='location-marker' onClick={onClick}>
			<Icon
				icon={fireIcon}
				width='30'
				height='30'
				className='location-icon'
			/>
		</div>
	);
};

export default LocationMarker;
