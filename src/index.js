import React from 'react';
import ReactDOM from 'react-dom';

import Seasons from './components/Seasons';

const App = () => {
	return (
		<Seasons/>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
