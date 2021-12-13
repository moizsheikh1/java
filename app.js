// var firstName = prompt();
// var lastName = prompt();
// var firstName, lastName, fullName;
// fullName = firstName + lastName;
// console.log(fullName)



// var a=prompt("ENTER THE FAVOURITE  PHONE Name")
// var b=[" SAMSUNG ","IPHONE","NOKIA","OPPO","REDME","MOTOROLA ","TECHNO SPARK"]
// var c="MY FAVOURITE PHONE IS"
// console.log(c+a)
// console.log(b.length)



// let text = "Hello world, welcome to the universe.";
// text.indexOf("e", 5);



 // Search a string for "welcome"
// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("welcome");
// console.log(n)




// Return the first character of a string
// var str = "PAKISTAN";
// var res = str.charAt(3);
// console.log(res)



//  var firstName = prompt(),lastName = prompt();

// var firstName, lastName, fullName;
// fullName = firstName + lastName;
// console.log(fullName)


// function replaceAll(string, search, replace) {
//     return string.split(search).join(replace);
//   }
//   replaceAll('abba', 'a', 'i');          // => 'ibbi'
//   replaceAll('go go go!', 'go', 'move'); // => 'move move move!'
//   replaceAll('oops', 'z', 'y');          // => 'oops'
//   console.log(replaceAll)



// var a =("472")
// console.log(a)
// var b =("472")
// console.log(+b)



// var a = prompt("PEANUTS")
// a = a.toUpperCase()
// console.log(a)


// var a =prompt("javascript")
// a=a.totitlecase()
// console.log(a)



// function toTitleCase(str) {
//     return str.replace(
      
//       function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       }
//     );
//   }
//   console.log(toTitleCase)




// var num = 15;
// var a = num.toString(); // a = 15
// var b = num.toString(2); // b = 1111
// var c = num.toString(8); // c = 17
// var d = num.toString(16); // d = f
// console.log(a+b+c+d)



// var userName=prompt("Enter your Input:");
//   while (!checkValidName(userName)){
//   alert("please enter a valid userName");
//   userName=prompt("Enter your Input: ");
//   };
//   console.log(userName)


// const str = 'UNIVERSITY OF KARCHU';

// const chars = str.split('');

// console.log(chars);



// var a="PAKISTAN"
// a=a.charAt(7)
// console.log(a)







// / var a=prompt("ENTER POSITIVE INTEGER")
// var ans=Math.round(a)
// var answ=Math.ceil(a)
// var answer=Math.floor(a)
// console.log(a)
// console.log(ans)
// console.log(answ)

// console.log(answer)




// var a=prompt("ENTER negative INTEGER")
// var ans=Math.round(a)
// var answ=Math.ceil(a)
// var answer=Math.floor(a)
// console.log(a)
// console.log(ans)
// console.log(answ)

// console.log(answer)
// var a = Math.abs(-4);
// console.log(a)

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);


// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }


// var randomNum ;
// randomNum = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomNum)

// var a= prompt( "ENTER THE WEIGHT IN KGS")
// console.log(a,'kg') 



// const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+gnum);
// CHAPTER NO =26-30 {COMPLETED}



function getDate(){
    var cDate=new Date();
    document.getElementById("Date").innerHTML = cDate.toString();
    console.log(getDate)
  }
  