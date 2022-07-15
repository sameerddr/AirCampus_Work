 // anagrams
 // ex - silent = listen , triangle = integral

 let a = "god";
 let b = "dog";

 console.log(a.split("").sort().join(""));
 if (a.split("").sort().join("") == b.split("").sort().join("")) {
     console.log("yes it is analog");
 } else {
     console.log("not an analog");
 }