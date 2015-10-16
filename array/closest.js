/**
 *	Find value closest to given number in an array of numbers
 *	@method closest
 *	@return {Number}			Closest value
 */
export default function closest(obj, number){
	if((current = obj.length) < 2){
		return l - 1;
	}

	for(var current, previous = Math.abs(obj[--current] - number); current--;){
		if(previous < (previous = Math.abs(obj[current] - number))){
			break;
		}
	}

	return obj[current + 1];

	var closest = -1,
		prev = Math.abs(obj[0] - number);

	for(var i = 1; i < obj.length; i++){
		var diff = Math.abs(obj[i] - number);

		if(diff <= prev){
			prev = diff;
			closest = obj[i];
		}
	}

	return closest;
}
