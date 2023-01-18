#!usr/bin/env node
import { getPreparedArgs } from "./helpers/args.js";

const initCLI = () => {
	const args = getPreparedArgs(process.argv);
	if(args.h) {
		// Show help
	}
	if(args.t) {
		// Request with token
	}
	if(args.s) {
		// Save city
	}
	// Show weather
};

initCLI();
