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
	var x = [1, 2, 3, 4, 5, 6]
	var price = [11900, 19000, 38000, 7200, 55000, 60000];

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
	var x = [1, 2, 3, 4, 5, 6]
	var price = [11900, 19000, 38000, 7200, 55000, 60000];

	sortPrice(price, x);

	var k = 1;

	for(i=x.length-1; i >= 0; i--)
	{
		var y = x[i];
		items[y-1].style.order = k;
		k++;
	}
}

function phone()
{
	var p = document.getElementsByClassName('phone');
	var h = document.getElementsByClassName('headset');
	var c= document.getElementsByClassName('camera');
	var w = document.getElementsByClassName('watch');
	for(i = 0; i < p.length; i++)
	{
		p[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		h[i].style.display = "none";
		c[i].style.display = "none";
		w[i].style.display = "none";
	}
}
function headset()
{
	var p = document.getElementsByClassName('phone');
	var h = document.getElementsByClassName('headset');
	var c= document.getElementsByClassName('camera');
	var w = document.getElementsByClassName('watch');
	for(i = 0; i < h.length; i++)
	{
		h[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		p[i].style.display = "none";
		c[i].style.display = "none";
		w[i].style.display = "none";
	}
}
function camera()
{
	var p = document.getElementsByClassName('phone');
	var h = document.getElementsByClassName('headset');
	var c= document.getElementsByClassName('camera');
	var w = document.getElementsByClassName('watch');
	for(i = 0; i < c.length; i++)
	{
		c[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		h[i].style.display = "none";
		p[i].style.display = "none";
		w[i].style.display = "none";
	}
}
function watch()
{
	var p = document.getElementsByClassName('phone');
	var h = document.getElementsByClassName('headset');
	var c= document.getElementsByClassName('camera');
	var w = document.getElementsByClassName('watch');
	for(i = 0; i < w.length; i++)
	{
		w[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		h[i].style.display = "none";
		c[i].style.display = "none";
		p[i].style.display = "none";
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