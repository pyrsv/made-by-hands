import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:5000',
	proxy: {
		host: '127.0.0.1',
		port: 5000,
	},
});
