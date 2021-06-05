window.onload = function itemprice()
{
	var q = document.getElementsByClassName('quantity').innerHTML;
	var p = document.getElementsByClassName('pricefor1').innerHTML;
	var totp = document.getElementsByClassName('price').innerHTML;
	for(i = 0; i < 3; i++)
	{
		var a = parseInt(q[i]);
		var b = parseInt(p[i]);
		var tot = a*b;
		var Stot = String(tot);
		totp[i] = Stot;
	}
}

/*
function totalquantity()
{
	var q = document.getElementsByClassName('quantity');
	var total=0;
	for(i = 0; i < 3; i++)
	{
		var a = parseInt(q[i].innerHTML);
		total = a + total;
	}
	document.getElementByClassName('tquantiy').innerHTML = total;
}

function totalprice()
{
	var p = document.getElementsByClassName('price');
	var total = 0;
	for(i = 0; i < 3; i++)
	{
		var a = parseInt(p[i].innerHTML);
		total = a + total;
	}
	document.getElementByClassName('tprice').innerHTML = total;
}*/