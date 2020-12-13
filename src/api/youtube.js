import axios from 'axios';

const KEY = 'AIzaSyD934Yz_KFmb9_jqwh2CVMknatCFyelB5g';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
