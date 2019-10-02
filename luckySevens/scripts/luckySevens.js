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
	while(bet>=1){
		var dice1 =rollDice();
		var dice2 =rollDice();
		if(dice1+dice2==7){bet=bet+4}
		else{bet=bet-1}
		numberRolls++
		if(bet>maxMoney){maxMoney=bet;numRollsMax=numberRolls}
	}
	return [numberRolls,maxMoney,numRollsMax]
}

function clearErrors(){
	for(var loopCounter=0; loopCounter<document.forms["diceGame"].elements.length; loopCounter++){
		if (document.forms["diceGame"].elements[loopCounter].parentElement.className.indexOf("has-")!=-1){
			document.forms["diceGame"].elements[loopCounter].parentElement.className="form-group";
		}
	}
}

function resetForm(){
	clearErrors();
	document.forms["diceGame"]["bet"].value="";
	document.getElementById("results").style.display="none";
	document.getElementById("submitButton").innerText="Play";
	document.forms["diceGame"]["bet"].focus();
	document.getElementById("submitButton").style.display="block";
	document.getElementById("resetButton").style.display="none";
}

function validateItems(){
	clearErrors();
	var num1 = document.forms["diceGame"]["bet"].value;
	if(num1==""||num1=="0"||isNaN(num1)){
		alert("Your starting bet must be a number.");
		document.forms["diceGame"]["num1"].parentElement.className="form-group has-error";
		document.forms["diceGame"]["num1"].focus();
		return false;
	}
	var game=luckySevensGame(num1);
	document.getElementById("submitButton").style.display="none";
	document.getElementById("resetButton").style.display="block";
	document.getElementById("results").style.display="block";
	document.getElementById("submitButton").innerText="Recalculate";
	document.getElementById("startBet").innerText=Number(num1);
	document.getElementById("totalRolls").innerText = game[0];
	document.getElementById("maxMoney").innerText = game[1];
    document.getElementById("MRolls").innerText = game[2];
	return false;
}