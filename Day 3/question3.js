let marks = prompt("Enter the marks : ");

//using if else(conditional)
/*
{
    if (marks >=90)
    console.log("You are having " +marks+ " and gread is A+");
    else
    if (marks >=80 && marks <90)
    {
    console.log('Grade A');
    }
    else
    if (marks >=70 && marks <80)
    {
    console.log('Grade B+');
    }
    else
    if (marks >=60 && marks <70)
    {
    console.log('Grade B');
    }
    else
    console.log('Grade C');
    }
*/

//using switch cse
switch (true)
{
case  marks >=90 : 
    console.log("You are having " +marks+ " and gread is A+");
    break;
case marks >=80 && marks <90 :
    console.log("You are having " +marks+ " and gread is A");
    break;
case marks >=70 && marks <80 :
    console.log("You are having " +marks+ " and gread is B+");
    break;
case marks >=60 && marks <70 :
    console.log("You are having " +marks+ " and gread is B");
    break;
case marks <70:
    console.log("You are having " +marks+ " and gread is C");
    break;
default:
    console.log("Marks are not in range.....");
}
