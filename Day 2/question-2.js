//String Methods

let str = `Hi! This is javascript code.`;
//length
//find the length of string
let strn =str.length;
console.log(strn);

//indexOf
/*The indexOf() method returns the index of 
(the position of) the first occurrence of a specified text in a string*/
let strn1 = str.indexOf('is');
console.log(strn1);

//lastIndexOf
/*The lastIndexOf() method returns the index of the last 
occurrence of a specified text in a string */
let strn2 = str.lastIndexOf("is");
console.log(strn2);

//search
/* The search() method searches a string for 
a specified value and returns the position of the match:
*/
let strn3 = str.search("is");
console.log(strn3);

//sclice
/*slice() extracts a part of a string and 
returns the extracted part in a new string.
 */
let strn4 = str.slice(7, 13);
console.log(strn4);

//substring
/*substring() is similar to slice(). */
let strn5 = str.substring(7, 13);
console.log(strn5);

//replace
/*The replace() method replaces a specified 
value with another value in a string.*/
let strn6 = str.replace("Hi","Hello");
console.log(strn6);

//toUpperCase
/*A string is converted to upper case with toUpperCase(): */
let strn7 = str.toUpperCase(); 
console.log(strn7);

//toLowerCase
/*A string is converted to upper case with toLowerCase(): */
let strn8 = str.toLowerCase(); 
console.log(strn8);

//Methods of Array

let names = ["anna", "John", "ket", "Merry"];

//toString
/* The JavaScript method toString() converts an 
array to a string of (comma separated) array values.
*/
let arr = names.toString();
console.log(arr);

//join
/*The join() method also joins all array elements into a string. */
let arr1 = names.join("*");
console.log(arr1);

//pop
/*The pop() method removes the last element from an array */
let arr2 = names.pop();
console.log(arr2);

//push
/*The push() method returns the new array length:*/
let arr3 = names.push("susen"); 
console.log(arr3);

//shift
/* The shift() method removes the first array element and "shifts" all other elements to a lower index.*/
let arr4 = names.shift()
console.log(arr4);

//splice
/* The splice() method can be used to add new items to an array:*/
let arr5 = names.splice(2, 0, "linda", "savi");
console.log(arr5);

//slice
/* The slice() method slices out a piece of an array into a new array.*/
let arr6 = names.slice(1);
console.log(arr6);
