function Table() 
{
	var one=document.getElementById("num").value;
	for (var i = 1; i < 11; i++) 
	{
		var mul=one*i;
		document.write(+one+"*"+i+"="+mul+"<br>");
	}
	var p=confirm("Do you want table of another number");
	if(p==true)
	{
		location.reload();
	}
}