// JavaScript File
document.getElementById("guess").onclick = function(){
let age = document.getElementById("age").value;
let day = document.getElementById("day").value;
if ((age < 18 ) && (day == "monday")|| (day == "tuesday") || (day == "wednesday") || (day == "thursday") || (day == "friday"  ))
{
alert("Time for School!!!");
}
else if ((age > 18) && (day == "monday")|| (day == "tuesday") || (day == "wednesday") || (day == "thursday") || (day == "friday"  ))
 {
  alert("Time for work!!");
 }
 else if ((age < 18 ) && (day == "saturday") || (day == "sunday"))
 {
 alert("Time to relax!!");
 }
 else if ((age > 18 ) && (day == "saturday") || (day == "sunday"))
 alert("Time to relax");
}; 