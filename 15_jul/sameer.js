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
     if (n1 != n2) /// If length of both strings is not
     // same, then they cannot be anagram
         return false;
     str1.sort();
     str2.sort()

     //  for (const str1 of str1) {
     //      console.log(str1);
     //  }
     for (let i = 0; i < n1; i++)
         if (str1[i] != str2[i]) {
             return false;
         }

     return true;
 }
 console.log(anagram("sameer", "reemas"));

 // anagram
 // for of
 // clourse
 // 
 //