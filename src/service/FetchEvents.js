import { useState, useEffect } from 'react';

const FetchEvents = () => {
	const [loading, setLoading] = useState(false);
	const [eventData, setEventData] = useState([]);

	useEffect(() => {
		const getEvents = async () => {
			setLoading(true);

			const res = await fetch(
				`https://eonet.gsfc.nasa.gov/api/v2.1/events`
			);
			const { events } = await res.json();

			setLoading(false);
			setEventData(events);
		};

		getEvents();
	}, []);

	return { eventData, loading };
};

export default FetchEvents;
