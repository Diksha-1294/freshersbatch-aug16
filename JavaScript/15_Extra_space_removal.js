function RemoveSpace() 
{
	var str=document.getElementById("str").value;
	var str1=(str.trim());
	document.getElementById("result").innerHTML = "Trimmed string is "+str1;
}