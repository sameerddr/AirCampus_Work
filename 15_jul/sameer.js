 // anagrams
 // ex - silent = listen , triangle = integral

 let a = "god";
 let b = "dog";

 //  console.log(a.split("").sort().join(""));
 //  if (a.split("").sort().join("") == b.split("").sort().join("")) {
 //      console.log("yes it is analog");
 //  } else {
 //      console.log("not an analog");
 //  }



 // JavaScript program to check whether
 // two strings are anagrams of each other

 function anagram(str1, str2) {
     let n1 = str1.length;
     let n2 = str2.length;
     if (n1 != n2) /// If length of both strings is notsame,they cannot be anagram
         return false;
     str1.split("").sort().join("");
     str2.split("").sort().join("");

     for (let i = 0; i < n1; i++) {
         if (str1[i] == str2[i]) {
             return true;
         } else {

             return false;
         }
     }


 }
 console.log(anagram("sameer", "meersa"));

 // for of -- The for...of loop was introduced in the later versions of JavaScript ES6.

 //  for..of loop in JavaScript allows you to iterate over iterable objects(arrays, sets, maps, strings etc).

 //  The syntax of the for...of loop is:

 // for (element of iterable) {
 //     // body of for...of
 // }

 const students = ['John', 'Sara', 'Jack'];
 for (let element of students) {
     console.log(element);
 }

 let aa = "code";
 for (let element of aa) {
     console.log(element);
     element[0] = "s";
     console.log(element);
 }