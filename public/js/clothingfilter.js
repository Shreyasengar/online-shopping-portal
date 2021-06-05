function sortPrice(price, x)
{
	var len = price.length;

    for (i = 0; i < len; i++)
    {
        for (j = 0; j < (len-i); j++)
        {
            if (price[j] > price[j+1])
            {
            	var temp1 = price[j];
			    price[j] = price[j+1];
			    price[j+1] = temp1;

			    var temp2 = x[j];
			    x[j] = x[j+1];
			    x[j+1] = temp2;
            }
        }
    }
}

function lowtohigh()
{
	var items = document.getElementsByClassName('item');
	var products = document.getElementsByClassName('products');
	var x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	var price = [1000, 1200, 1800, 1100, 3200, 2800, 2000, 900, 1500];

	sortPrice(price, x);

	for(i=0; i < x.length; i++)
	{
		var y = x[i];
		items[y-1].style.order = i+1;
	}
}  

function hightolow()
{
	var items = document.getElementsByClassName('item');
	var products = document.getElementsByClassName('products');
	var x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	var price = [1000, 1200, 1800, 1100, 3200, 2800, 2000, 900, 1500];

	sortPrice(price, x);

	var k = 1;

	for(i=x.length-1; i >= 0; i--)
	{
		var y = x[i];
		items[y-1].style.order = k;
		k++;
	}
} 
function female()
{
	var m = document.getElementsByClassName('men');
	var f = document.getElementsByClassName('women');
	for(i = 0; i < m.length; i++)
	{
		m[i].style.display = "none";
	}
	for(i = 0; i < f.length; i++)
	{
		f[i].style.display = "inline-block";
	}

}
function male()
{
	var f = document.getElementsByClassName('women');
	var m = document.getElementsByClassName('men');
	for(i = 0; i < f.length; i++)
	{
		f[i].style.display = "none";
	}
	for(i = 0; i < m.length; i++)
	{
		m[i].style.display = "inline-block";
	}
}
function tops()
{
	var t = document.getElementsByClassName('top');
	var j = document.getElementsByClassName('jacket');
	var s = document.getElementsByClassName('sweater');
	var p = document.getElementsByClassName('pant');
	for(i = 0; i < t.length; i++)
	{
		t[i].style.display = "inline-block";
	}
	for(i = 0; i < 3; i++)
	{
		j[i].style.display = "none";
		s[i].style.display = "none";
		p[i].style.display = "none";
	}
}
function jacket()
{
	var t = document.getElementsByClassName('top');
	var j = document.getElementsByClassName('jacket');
	var s = document.getElementsByClassName('sweater');
	var p = document.getElementsByClassName('pant');
	for(i = 0; i < j.length; i++)
	{
		j[i].style.display = "inline-block";
	}
	for(i = 0; i < 3; i++)
	{
		t[i].style.display = "none";
		s[i].style.display = "none";
		p[i].style.display = "none";
	}
}
function sweater()
{
	var t = document.getElementsByClassName('top');
	var j = document.getElementsByClassName('jacket');
	var s = document.getElementsByClassName('sweater');
	var p = document.getElementsByClassName('pant');
	for(i = 0; i < s.length; i++)
	{
		s[i].style.display = "inline-block";
	}
	for(i = 0; i < 3; i++)
	{
		j[i].style.display = "none";
		t[i].style.display = "none";
		p[i].style.display = "none";
	}
}
function pant()
{
	var t = document.getElementsByClassName('top');
	var j = document.getElementsByClassName('jacket');
	var s = document.getElementsByClassName('sweater');
	var p = document.getElementsByClassName('pant');
	for(i = 0; i < p.length; i++)
	{
		p[i].style.display = "inline-block";
	}
	for(i = 0; i < 3; i++)
	{
		j[i].style.display = "none";
		s[i].style.display = "none";
		t[i].style.display = "none";
	}
}
function allitems()
{
	var x = document.getElementsByClassName('item');
	for(i = 0; i < x.length; i++)
	{
		x[i].style.display = "inline-block";
		x[i].style.order = i+1 ;
	}
}