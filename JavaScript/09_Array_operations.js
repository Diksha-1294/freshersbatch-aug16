var num = [2,6,9,14,15,20,26,34,37,40];
function Max() 
{
	var num1= Math.max(num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9]);
    document.write("Maximum of above values is "+num1);
}
function Min() 
{
	var num2= Math.min(num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9]);
    document.write("Minimum of above values is "+num2);
}
function Avg() 
{
	var sum=0;
	for (var i = 0; i < num.length; i++)
	{
		sum = sum + num[i];
	}
	var av= sum/num.length;
	document.write("Average of above numbers is "+av);
}
function Total()
{
	var sum=0;
	for (var i = 0; i < num.length; i++)
	{
		sum = sum + num[i];
	}
	document.write("Sum of above numbers is "+sum);
}