import React from 'react';

const CommentDetail = (props) => {
	let { author, timeAgo, content, avatar } = props;
	return (
		<div className='comment'>
			<a href='/' className='avatar'>
				<img alt='avatar' src={avatar} />
			</a>
			<div className='content'>
				<a href='/yarn.lock' className='author'>
					{author}
				</a>
				<div className='metadata'>
					<span className='date'>{timeAgo}</span>
				</div>
				<div className='text'>{content}</div>
				<div className='actions'>
					<a href='/' className='reply'>
						Reply
					</a>
				</div>
			</div>
		</div>
	);
};

export default CommentDetail;
