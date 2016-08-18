var myary = [4,78,43,23,7,55,11,0,9];
var i, j, temp;
function Asc()
{
	for(i=0; i<myary.length-1; i++)
	{ 
		for(j=i+1; j<myary.length; j++)
		{
			if(myary[i] > myary[j])
			{
				temp = myary[i];
				myary[i] = myary[j];
				myary[j] = temp;
			}
		}
	}
	document.write("Sorted list in Ascending order is ");
	for(i=0; i<myary.length; i++)
	{	
		document.write(+myary[i] +"\n");
	}
}
function Desc() 
{
	  var flag = 1;               
      for(i = 0; i < myary.length && flag; i++)
      {
          flag = 0;
          for (j=0; j < (myary.length -1); j++)
          {
               if (myary[j+1] > myary[j])      
               { 
                    temp = myary[j];             
                    myary[j] = myary[j+1];
                    myary[j+1] = temp;
                    flag = 1;               
                }
            }
        } 
        document.write("Sorted Array in Descending order is ");
        var n=0;
        while(n<myary.length)
        {
        	document.write(+myary[n]+"\n");
        	n++;
        }

}