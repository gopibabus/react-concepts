import { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};
	
	render() {
		return (
			<div className='search-bar ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label htmlFor='search-box'>Image Search</label>
						<input
							type='text'
							id='search-box'
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
