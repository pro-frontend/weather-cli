#!usr/bin/env node
import { getPreparedArgs } from "./helpers/args.js";
import { Print } from './services/index.js';

const initCLI = () => {
	const args = getPreparedArgs(process.argv);
	if(args.h && Object.keys(args).length === 1) {
		console.log(Print.showHelp('h'));
	}
	if(args.t) {
		// Request with token
		console.log(Print.showHelp('t'));
	}
	if(args.s) {
		// Save city
		console.log(Print.showHelp('s'));
	}
	// Show weather
};

initCLI();
