var Str="My name is Diksha Kasbe. I live in Pune. I am from Indore."
var i=0, j=0, k=0, m=0 ,n=0;
function count() 
{
	for (var x = 0; x < Str.length; x++) 
	{
		if(Str[x]=="a" || Str[x]=="A")
		{
			i++;
		}
		if(Str[x]=="e" || Str[x]=="E")
		{
			j++;
		}
		if(Str[x]=="i" || Str[x]=="I")
		{
			k++;
		}
		if(Str[x]=="o" || Str[x]=="O")
		{
			m++;
		}
		if(Str[x]=="u" || Str[x]=="U")
		{
			n++;
		}
	}
	
	document.getElementById("result").innerHTML = "No. of a's in string is "+i+"<br>No. of e's in string is "+j+"<br>No. of i's in string is "+k+"<br>No. of o's in string is "+m+"<br>No. of u's in string is "+n ;
}