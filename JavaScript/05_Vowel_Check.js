function Check() 
{
	var one=document.getElementById("char").value;
	if (one=='a' || one=='e' || one=='i' || one=='o' || one=='u')
	{
		alert("The character you entered is a vowel");
	}
	else
	{
		alert("The character you entered is a consonant");	
	}
}