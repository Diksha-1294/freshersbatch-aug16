
function reverse(st)
{
    return st.split("").reverse().join("");
}
function foo(){
	var st=document.getElementById("strn").value;
	var xyz=st;
	st=reverse(st);

    if (xyz==st) 
    {
		document.getElementById("result").innerHTML = "The string is palindrome";    	
    }
    else
    {
    	document.getElementById("result").innerHTML = "The string is consonant";	
    } 
}
