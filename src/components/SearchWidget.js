import React, { useState, useEffect } from 'react';

import axios from 'axios';

const SearchWidget = () => {
	const [term, setTerm] = useState('php');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			});
			setResults(data.query.search);
		};
		if (debouncedTerm) search();
	}, [debouncedTerm]);

	const renderedResults = results.map((result) => {
		return (
			<div className='item' key={result.pageid}>
				<div className='right floated content'>
					<a
						className='ui button'
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						target='_blank'
						rel='noreferrer'
					>
						Go
					</a>
				</div>
				<div className='content'>
					<div className='header'>{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label htmlFor='search-input'>Enter Search Term</label>
					<input
						type='text'
						className='input'
						id='search-input'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	);
};

export default SearchWidget;
