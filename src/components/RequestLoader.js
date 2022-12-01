const RequestLoader = () => {
	return (
		<div className='loader'>
			<div className='d-flex justify-content-center'>
				<div
					className='spinner-border'
					style={{ width: '6rem', height: '6rem' }}
					role='status'
				>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
			<h1 className='data-info'>LOADING DATA</h1>
		</div>
	);
};

export default RequestLoader;
