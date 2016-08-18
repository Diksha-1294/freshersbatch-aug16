function vali()
{
	var str=document.getElementById("em").value;
	var one=str.indexOf("@");
	var two=str.indexOf(".");
	if(one==-1 || two==-1)	
	{
		document.getElementById("result").innerHTML = "Your email is not valid.";
	}
	else if(one>two)
	{
		document.getElementById("result").innerHTML = "Your email is not valid.";
	}
	else
	{
		document.getElementById("result").innerHTML = "Your email is valid.";
	}
}