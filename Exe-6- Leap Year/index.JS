/*  Leap Year
Write a program that works out whether if a given year is a leap year. A normal year has365 days, leap year have 366, with an extra day.
This is how to work out whether if a particular year is a leap year:

on every year that is evenly divisible by 4.
Except every year that is evenly divisible by 100.
unless the year is also evenly divisible by 400. */



/* solutions */


function isLeap(year) {
If (year % 4 ===) {
If ( year % 100 === 0) {
If (year % 400 === 0) {
Return” Leap year” ;
} else {
Return “ Not leap year “;
}
} else  {
Return “ Leap year” ;
}
} else {
Return “Not leap year.”;
}
}
