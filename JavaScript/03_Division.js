function Divide() 
{
	var one=document.getElementById("first").value;
	var two=document.getElementById("second").value;
	if (two==0) 
	{
		alert("ERROR!!! Divisor can't be zero");
	}
	else
	{
		var three=one/two;
		document.write("Answer is "+three);
	}
}