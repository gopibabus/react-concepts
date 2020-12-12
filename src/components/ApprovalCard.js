import React from 'react';

const ApprovalCard = (props) => {
	let { children } = props;
	return (
		<div className='ui card'>
			<div className='content'>{children}</div>
			<div className='extra content'></div>
			<div class='ui two buttons'>
				<div className='ui basic green button'>Approve</div>
				<div className='ui basic red button'>Reject</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
