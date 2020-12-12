import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID a3hKzEzL08GF83zAgbCcd0XN3Qhs5PmCTauvvFPvtxY',
	},
});
