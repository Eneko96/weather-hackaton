// src/store/cars.js

import { writable } from 'svelte/store';


const { subscribe, set } = writable(null);

const addForecast = forecast => set(forecast)

const reset = () => {
		set(null);
};

export default {
		subscribe,
		addForecast,
		reset
}