function Fact() 
{
	var one=document.getElementById("num").value;
	var fact=1;
	for (var i = 1; i <= one; i++) 
	{
       fact = fact*i;		
    }
    alert("Factorial of "+one+" is "+fact);
}