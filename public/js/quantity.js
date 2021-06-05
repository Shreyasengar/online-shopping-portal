function display(addtocart, quantity, number)
{
	addtocart.style.display = "none";
	document.getElementById(quantity).style.display = "inline";
	document.getElementById(number).innerHTML = "1";
}
function subtract(addtocart, quantity, number)
{
	var amount = document.getElementById(number).innerHTML;
	if(amount == '1')
	{
		document.getElementById(quantity).style.display = "none";
		document.getElementById(addtocart).style.display = "block";
	}
	else
	{
		var x = parseInt(amount) - 1;
		amount = String(x);
		document.getElementById(number).innerHTML = amount;
	}
}
function addition(number)
{
	var amount = document.getElementById(number).innerHTML;
	var x = parseInt(amount) + 1;
	amount = String(x);
	document.getElementById(number).innerHTML = amount;
}