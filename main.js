
$( document ).ready(function() {
	var intro = "Hello World";
	var year = 1492;
	var dog = false;
	var date = "11/07/2016";
	var amount = 5.45;
	var close = "X";

	$( ".sen" ).append( intro + " <p>Columbus Sailed the world in  " + year + "</p> <p> It is " + dog + " that I have a dog at home. </p> <p> Today is " + date + "</p><p> I spent &#36;" + amount + " on a cheeseburger.</p><p> " + close + " marks the spot" );


var Movies = ["The Holiday, ", " Intersteller, ", "Inception, ", "Matrix "];

//$( ".sen" ).append( Movies );

Movies.push("ADDED: 50 First Dates");
delete Movies[3];

$( ".sen" ).append( Movies );



});
