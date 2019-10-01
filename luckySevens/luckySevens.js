/*
Mac Ferguson
Oct 1
version 10.1
*/

function rollDice(){
	return Math.floor(Math.random()*6)+1;
}

function luckySevensGame(bet){
	var maxMoney=bet
	var numberRolls=0
	var numRollsMax=0
	while(bet>0){
		var dice1 =rollDice();
		var dice2 =rollDice();
		if(dice1+dice2==7){bet=bet+4}
		else{bet=bet-1}
		numberRolls++
		if(bet>maxMoney){maxMoney=bet;numRollsMax=numberRolls}
	}
}