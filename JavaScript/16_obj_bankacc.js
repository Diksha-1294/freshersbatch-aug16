function Bank(accnum, accnm, accbal) 
{
	this.accnum=accnum;
	this.accnm=accnm;
	this.accbal=accbal;
}
function Withdraw() 
{
	var AccNum=document.getElementById("accnum").value;
	var AccNm=document.getElementById("accnm").value;
	var AccBal=document.getElementById("accbal").value;
	var Amount=document.getElementById("amt").value;

	var BankAccount=new Bank(AccNum, AccNm, AccBal);
	if (Amount<0) 
	{
		alert("Please enter positive amount!!");
	}
	else
	{
		AccBal=AccBal-Amount;
		document.getElementById("result").innerHTML = "The main balance is now Rs. "+AccBal;
	}
}
function Deposit() 
{
	var AccNum=document.getElementById("accnum").value;
	var AccNm=document.getElementById("accnm").value;
	var AccBal=document.getElementById("accbal").value;
	var Amount=document.getElementById("amt").value;

	var BankAccount=new Bank(AccNum, AccNm, AccBal);
	if (Amount<0) 
	{
		alert("Please enter positive amount!!");
	}
	else
	{
		AccBal=parseInt(AccBal)+parseInt(Amount);
		document.getElementById("result").innerHTML = "The main balance is now Rs. "+AccBal;
	}
}