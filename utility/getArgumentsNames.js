/**
 * Get supplied function's arguments names
 * This code was found on David Walsh's blog <http://davidwalsh.name/javascript-arguments>
 * @method getArgumentsNames
 * @param {Function} fn		Function to get arguments from
 * @return {Array}			Arguments names
 */
export default function getArgumentsNames(fn){
	// First match everything inside the function argument parens.
	var args = fn.toString().match(/function\s.*?\(([^)]*)\)/)[1];

	// Split the arguments string into an array comma delimited.
	return args.split(',').map(function(arg) {
		// Ensure no inline comments are parsed and trim the whitespace.
		return arg.replace(/\/\*.*\*\//, '').trim();
	}).filter(function(arg) {
		// Ensure no undefineds are added.
		return arg;
	});
}
