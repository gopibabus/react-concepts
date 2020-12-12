import React from 'react';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const AdminDecision = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author='Hari'
					timeAgo='Today at 4:45 PM'
					content='How artistic!'
					avatar='https://source.unsplash.com/random'
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Gopi'
					timeAgo='Yesterday at 10:45 PM'
					content='Wonderful post'
					avatar='https://source.unsplash.com/random'
				/>
			</ApprovalCard>
		</div>
	);
};

export default AdminDecision;
