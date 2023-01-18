import chalk from 'chalk';
import dedent from "dedent-js";

export class PrintHelper {

	error(error) {
		console.log(`${chalk.bgRed(' ERROR: ')}   ${error}`);
	}

	success(success) {
		console.log(`${chalk.bgGreen(' SUCCESS: ')}   ${success}`);
	}

	showHelp(arg) {
		const argsMessage = [
			{ h: dedent`No arguments - show weather for default city
				-s <city> - set city
				-h - show help
				-t <api_key> - set token` },
			{ s: '-s <city> - set city' },
			{ t: '-t <api_key> - set token' },
		];

		if(!arg) {
			console.log(dedent`
				${chalk.bgCyan(' HELP: ')}
				No arguments - show weather for default city
				-s <city> - set city
				-h - show help
				-t <api_key> - set token
			`);
		} else {
			console.log(dedent`
				${chalk.bgCyan(' HELP: ')}
				${argsMessage.find((el) => {return el[arg]})[arg] ?? 'invalid argument'}
			`);
		}
	}
}
