
function calculate() 
{
	var xyz=document.getElementById("str").value;
	var count=0, count1=0, count2=0;
	for (var i = 0; i < xyz.length; i++) 
	{
		count1++;	
	}
	for (var i = 0; i < xyz.length; i++) 
	{
		if(xyz[i]==' ')
		count2++;	
	}
	count=count1-count2;
	document.getElementById("result").innerHTML = "The no. of characters in string are "+count;
}