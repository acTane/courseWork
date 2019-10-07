/*
Mac Ferguson
Oct 7
Version 10.8
*/

function clearErrors(){
	for(var loopCounter=0; loopCounter<document.forms["cont"].elements.length; loopCounter++){
		if (document.forms["cont"].elements[loopCounter].parentElement.className.indexOf("has-")!=-1){
			document.forms["cont"].elements[loopCounter].parentElement.className="form-group";
		}
	}
}


function validateItems(){
	clearErrors();
	var n = document.forms["cont"]["name"].value
	var e = document.forms["cont"]["email"].value
	var p = document.forms["cont"]["phone"].value
	
	if(n==""){
		alert("You must input a name.");
		document.forms["cont"]["name"].parentElement.className="form-group has-error";
		document.forms["cont"]["name"].focus();
		return false;
	}
	
	if(e==""){
		alert("You must input an email.");
		document.forms["cont"]["email"].parentElement.className="form-group has-error";
		document.forms["cont"]["email"].focus();
		return false;
	}
	
	if(p=="" || isNaN(p)){
		alert("You must input a phone number.");
		document.forms["cont"]["phone"].parentElement.className="form-group has-error";
		document.forms["cont"]["phone"].focus();
		return false;
	}
	
	return false;
}

function validateName(nam){
	if(nam== ""){
		alert("Please enter a Name.");
		document.forms["cont"]["name"].focus();
		document.getElementById("nameCheck").style.display="none";
	}
	else{
		document.getElementById("nameCheck").style.display="inline";
	}
}

function validateEmail(nam){
	if(nam== ""){
		alert("Please enter an email.");
		document.forms["cont"]["email"].focus();
		document.getElementById("emailCheck").style.display="none";
	}
	else{
		document.getElementById("emailCheck").style.display="inline";
	}
}

function validatePhone(nam){
	if(nam== ""){
		alert("Please enter a phone number");
		document.forms["cont"]["phone"].focus();
		document.getElementById("phoneCheck").style.display="none";
	}
	else{
		document.getElementById("phoneCheck").style.display="inline";
	}
}