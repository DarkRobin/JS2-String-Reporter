var sign = prompt("Whats your favorite game?");

if (sign){
	alert("You entered " + sign);
	alert("There are " + sign.length +" characters in the word");
	alert("The third character is '" + sign.charAt(2) + "'");
	alert("Lowercase: " + sign.toLowerCase());
	alert("Uppercase: " + sign.toUpperCase());
	alert("I've always wanted to add " + sign +" to my game collection!")
	alert("Subword: " + sign.substring(1, 4));
}

// if  (sign){
// 	alert(sign.length);
// }
