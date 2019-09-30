function rollDice(sides){
	return Math.floor(Math.random()*sides)+1;
}

for (var i =0; i<100;i++){
	console.log(rollDice(i))
}

function addTwoNumbers(firstNumber, secondNumber){
	return firstNumber+secondNumber	;
}