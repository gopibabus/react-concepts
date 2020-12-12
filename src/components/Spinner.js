import React from 'react';

const Spinner = (props) => {
	const { message } = props;
	return (
		<div class='ui active dimmer'>
			<div class='ui text loader'>{message}</div>
		</div>
	);
};

Spinner.defaultProps = {
  message: "Loading..."
}

export default Spinner;
