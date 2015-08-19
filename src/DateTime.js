/*
OVERVIEW: 	Given a date in string format, return the day it corresponds to.
			Example: GetDay("Jan 12, 2000") should return 12.

INPUTS: 	dateString: String representing a date.

OUTPUT: 	number representing the day part of the date.

ERROR CASES: Return NaN if dateString is null or is not a valid Date.

NOTES: 		You can use built-in JS Classes such as Date class.

*/
exports.GetDay = function(dateString){
	if(dateString == null || dateString == "")
		return NaN;
	var d = Date.parse(dateString);
	if(isNaN(d)){
		return NaN;
	}
	var date = new Date(d);
	return date.getDay();
}

