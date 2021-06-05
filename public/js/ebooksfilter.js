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
	var price = [800, 1000, 1500, 950, 1100, 1600];

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
	var price = [800, 1000, 1500, 950, 1100, 1600];

	sortPrice(price, x);

	var k = 1;

	for(i=x.length-1; i >= 0; i--)
	{
		var y = x[i];
		items[y-1].style.order = k;
		k++;
	}
}

function philo()
{
	var p = document.getElementsByClassName('philo');
	var m = document.getElementsByClassName('mystery');
	var d = document.getElementsByClassName('drama');
	var r = document.getElementsByClassName('romance');
	for(i = 0; i < p.length; i++)
	{
		p[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		m[i].style.display = "none";
		d[i].style.display = "none";
		r[i].style.display = "none";
	}
}

function mystery()
{
	var p = document.getElementsByClassName('philo');
	var m = document.getElementsByClassName('mystery');
	var d = document.getElementsByClassName('drama');
	var r = document.getElementsByClassName('romance');
	for(i = 0; i < m.length; i++)
	{
		m[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		p[i].style.display = "none";
		d[i].style.display = "none";
		r[i].style.display = "none";
	}
}

function drama()
{
	var p = document.getElementsByClassName('philo');
	var m = document.getElementsByClassName('mystery');
	var d = document.getElementsByClassName('drama');
	var r = document.getElementsByClassName('romance');
	for(i = 0; i < d.length; i++)
	{
		d[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		m[i].style.display = "none";
		p[i].style.display = "none";
		r[i].style.display = "none";
	}
}

function romance()
{
	var p = document.getElementsByClassName('philo');
	var m = document.getElementsByClassName('mystery');
	var d = document.getElementsByClassName('drama');
	var r = document.getElementsByClassName('romance');
	for(i = 0; i < r.length; i++)
	{
		r[i].style.display = "inline-block";
	}
	for(i = 0; i < 2; i++)
	{
		m[i].style.display = "none";
		d[i].style.display = "none";
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