function countingCharacters(stringToCount){
	console.log(stringToCount + "has" + stringToCount.length + "characters");
}

function countingCharacters2(string,character){
	var  count=0;
	for(var pos=0;pos<string.length;pos++){
		if(string[pos] == character){count++}
		console.log(string[pos]);
	}
	console.log("String to search in:" + string);
	console.log("character to find:" + character);
	console.log("Number of times the character appears:" + count);
}

//countingCharacters2(prompt("Pick a word"),prompt("pick a letter"))






//countingCharacters(prompt("Type a Word"))

var n = "Pick Something"

console.log(n)
var subn=n.substr(1,5)
console.log(subn)

