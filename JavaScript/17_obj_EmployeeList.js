function EMP(empid,ename,empsalary,deptno) 
{
	this.empid=empid;
	this.ename=ename;
	this.empsalary=empsalary;
	this.deptno=deptno;
}

function Sort(empid[]) 
{
	empid[].sort(function(a, b){return a-b});
	document.write("Sorted : "+empid[]);
}