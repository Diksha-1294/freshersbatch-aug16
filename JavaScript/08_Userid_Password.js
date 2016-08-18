var count=0;
function Check() 
{
	var one=document.getElementById("user").value;
	var two=document.getElementById("pass").value;
	
	 if (one==two) 
	 {
	 	alert("Logged in successfully");
	 }
	 else
	 {
	 	alert("UserId and Password didn't match");
	 	count++;
	 	if(count==3)
	 	{
	 		alert("Error!! You have entered wrong credentials more than 3 times!! Please login after some time.");
	 	}
	 }

}