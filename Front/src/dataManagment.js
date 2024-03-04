import axios from 'axios';
import router from "./router/Router.js";

const url = 'http://localhost:3000';

export default {
	getTerceros,
}

async function getTerceros() {
	try {
		const response = await axios.get(url + "");
		array = response.data.results;
		for(var i=0; i < array.length; i++){
			
		}
		return nuevosgigs;
	
	}catch (error) {
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
	}
}