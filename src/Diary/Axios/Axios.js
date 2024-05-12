import axios from 'axios';

export default axios.create({
	baseURL: 'https://social-diary-1edf4-default-rtdb.firebaseio.com'
});
