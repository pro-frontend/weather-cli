export const getPreparedArgs = (args) => {
	const preparedArgs = {};
	const [executer, file, ...rest] = args;
	rest.forEach((value, index, array) => {
		if(value.charAt(0) === '-') {
			const currentArg = value.substring(1);
			if(index === array.length - 1) {
				preparedArgs[currentArg] = true;
			} else if(array[index + 1].charAt(0) !== '-') {
				preparedArgs[currentArg] = array[index + 1];
			} else {
				preparedArgs[value.substring(1)] = true;
			}
		}
	});

	return preparedArgs;
};
