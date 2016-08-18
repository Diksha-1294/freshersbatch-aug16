function Prime()
{
	var one=document.getElementById("first").value;
	var two=document.getElementById("second").value;
	for (var i = one; i <=two ; i++) 
	{
		var count = 0;
        for (var j = 2; j <= i/2; j++)
        {
            if(i%j==0)
            {
                count++;
                break;
        	}
        }
        if(count==0 && i!=1)
        {
            document.write(+i+" , ");
        }
	}
}