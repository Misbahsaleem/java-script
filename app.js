 // chapter:1 alerts
//  1. Write a script to greet your website visitor using JS alert box
// alert("Hello");
//   2. Write a script to display following message on your web page:
//   var a =  "Error! please enter vaild password";
//   alert(a);
// 3. Write a script to display following message on your web page: 
// (Hint : Use line break) 
// alert("Welcome to JS land...  \n Happy coding");
// 4. Write a script to display following messages in sequence: 
 //alert("Welcome to JS land");
 //alert("Happy coding! \n Prevent this page from creating additional dialogs");
// alert("Error please enter vaild password");
// 5. Generate the following message through browser’s developer console: 
 //alert("Hello...i can run JS through my web browser's console");
// 6. Make use of alerts in your new/existing HTML & CSS project
//alert("Hello! How are you");
//alert("Error! Please enter a vaild password");
//alert("Welcom! To JS land... \n Happy coding!");
// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//  a. Head 
//  b. Body (before your page’s HTML) 
// c. Body (inside your page’s HTML)
//  d. Body (after your page’s HTML) 
 //"same result appear when we place script in four of the above sections" 
                     //--End--1

// chapter2 : VARIABLES FOR STRINGS 
// 1. Declare a variable called username. 
// var a = "misbah";
// alert(a);
// 2. Declare a variable called myName & 
// assign to it a string that represents your Full Name. 
//  var myName = "Misbah Saleem";
// alert(myname);

// 3. Write script to
//  a) Declare a JS variable, titled message.
//  b) Assign “Hello World” to variable message 
//c) Display the message in alert box
//var message = "Hello world";
//alert(message);
//4. Write a script to save student’s bio data in
// JS variables and show the data in alert boxes. 
// var b = "jhone Dhoe";
// alert(b);
// var c = "15 years old";
// alert(c);
// var d ="certified Mobile application development";
// alert(d);
// 5. Write a script to display the following alert using one JS variable: 
// alert("Pizza \n Pizz \n Piz \n Pi \n P");
//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an 
// alert box.(Hint: use string concatenation)
//var email= ("Misbahcute12@gmail.com");
//alert("My" + "email address" + "is"+ "email");


//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
//Display the following message in an alert box: 
//var book = "A smarter way to learn JavaScript";
//alert("I am trying to learn the book A smarter way to learn javascript");
// 8. Write a script to display this in browser through JS 
//document.write("Yah! I can write HTML content through javascript");

//9. Store following string in a variable and show in alert and browser through JS 
//alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
                   //--End--2

   //chapter:3     VARIABLES FOR NUMBERS     
   
 //1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
 //var age = 22;
 //alert("I am "+age+" years old");
 //2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
//Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

//3. Declare a variable called birthYear & assign to it your birth year.
 //Show the following message in your browser: 
 //document.write("My birth year is 1990 <br> Date type of my ddeclared variable is number");

//  4. A visitor visits an online clothing store www.xyzClothing.com . 
//  Write a script to store in variables the following information: 
//  a.Visitor’s name 
//b. Product title
 //c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store".

//var customername="Ali";
//var product="Shirts";
//var Quantity= 4;
//document.write(customername + "ordered" +quantity +" " + product + " on XYZ Clothing shop");

               //--End--3
//Chapter: 4     VARIABLE NAMES: LEGAL & ILLEGAL 
//1. Declare 3 variables in one statement.
//var myName =444,mariam,hira;  
//2. Declare 5 legal & 5 illegal variable names
//legal ways 
//var myDocutment;
//var mariam;
//var $ali;
//var fatima;
//var _javeria;
//illegal ways 
//var @mariam;
//var 3a;
//var urooj  fatiam;
//var *saerchbar;
//var SALEEM;

//3. Display this in your browser 
//a)  A heading stating “Rules for naming JS variables” 
//b)  Variable names can only contain _______, ______,_______ and ______. For example $my_1stVariable 
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//d) Variable names are case _________ 
//e) Variable names should not be JS _________
//document.write("<h1>Rules for naming JS variable</h1>");
//document.write("<br>");
//document.write("<br>");
//document.write("A variable names can only contain, numbers, $and_, forexample:$my_1stVariable");
//document.write("<br>");
//document.write("variable must begin with a letter,$or _.for example: $name,_name or name");
//document.write("<br>");
//document.write("variable names are case sesnsitive");
//document.write("<br>");
//document.write("variable names should not be JS keywords");
           
                      //  --End--4

//chapter:5 MATH EXPRESSIONS
//1. Write a program that take two numbers & add them in a new variable.
//  Show the result in your browser.
// document.write("<h2>Sum of 5 and 4 is 9</h2>");
//var d =5;
//var e =4;
//var f=d+e;
//document.write("sum of and 5 is 4 is" + f );
// 2. Repeat task1 for subtraction, multiplication, division & modulus. 
//var a=4;
//var b=4;
//x = a-b;
//document.write("difference of "+ a +" and "+ b +" "+" is" +x);

//var a = 3;
//var b = 5;
//x = a/b;
//document.write("division of "+ a +" and "+ b +" "+" is" +x);


//var a =3;
//var b =5;
//x = a*b;
//document.write("products of "+ a +" and "+ b +" "+" is" +x);

//var a= 3;
//var b =5;
//x = a%b;
//document.write("Reminder of "+ a +" and "+ b +" "+" is" +x);

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.  c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
//  g. Add 7 to the variable.
//  h. Show the value of variable in your browser like “Value 
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 
 //var num;
 //document.write("value after variable decleration is:"+ num);
  // varnum5;
  //document.write("<br>");
  //document.write("initial value is:"+ num);
  //document.write("<br>");
   //num=num+1;
   //document.write("value after increment is"+num);
   //document.write("<br>");
   //num=num+7;
   //document.write("value after addition is"+num);
   //document.write("<br>");
   //num=num-1;
   //document.write("value after deccrement is" +num);
   //document.write("<br>");
   //document.write("Remainder is"+num);
  //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
//Example output: 
//var ticketprice = 630;
//var total =ticketprice*5;
//document.write("total cost of buying 5 tickets  a movie is" - total - 'PKR' );

//5. Write a script to display multiplication table of any number in your browser. E.g 

//document.write("<h1> tablet of four <br> </h1>");
   
// without using loap
//document.write(4 +"x"+ 1 + "="+  4*1+"<br>");
//document.write(4 +"x"+ 2 + "="+ 4*2+"<br>");
//document.write(4 +"x"+ 3 + "="+ 4*3+"<br>");
//document.write(4 +"x"+ 4 + "="+ 4*4+"<br>");
//document.write(4 +"x"+ 5 + "="+ 4*5+"<br>");
//document.write(4 +"x"+ 6 + "="+ 4*6+"<br>");
//document.write(4 +"x"+ 7 + "="+ 4*7+"<br>");
//document.write(4 +"x"+ 8 + "="+ 4*8+"<br>");
//document.write(4 +"x"+ 9 + "="+ 4*9+"<br>");
//document.write(4 +"x"+ 10 + "="+ 4*10+"<br>");

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//a.  Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
//var celsius = prompt("enter temp in celsius");
//var Fahrenheit = 9/5* celsius+32;
//alert("Fahrenheit");
//c. Now store a Fahrenheit temperature into a variable. 
//d. Convert it to Celsius & output “NNoF is NNoC”. 
//var Fahrenheit = prompt("enter temp in Fahrenheit");
//var celsius =5/9* fahrenheit-32;
//alert("celsius");

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
//a. Price of item 1 
//b. Price of item 2 
//c. Ordered quantity of item 1 
//d. Ordered Quantity of item 2 
//e. Shipping charges 
//Compute the total cost & show the receipt in your browser
//var item1 = 100;
//var item2 = 500;
//var ordereditem1 = 3;
//var ordereditem2 = 1;
//var Shippingcharges = 200;
//var total = item1  * 3 +  item2 * 1 + Shippingcharges;
//var receipt = "Prices of item1 is + item1 + <br>" quantity of item1 is + ordereditem1 + <br> Prices of item1;
//.document.write ("receipt");
//x
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
//var totalmarks = prompt (" enter total marks");
//var marksObtained = prompt(" enter obtained marks");
//var percentage = marksobtained/totalmarks*100
//document.write("your percentage is "+percentage + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
//var PKR = 10*104.8 + 25*28;
//document.write("PKR");
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression
//var arithmetic =(4+5)*10/2;
//document.write("arithmetic");
//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”. 


//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
//b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
//(Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
 
//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.   
 //var snack="chocolate";
 //var age=15;
 //var estimated_age=65;
 //var amount_per_day=3;
 //var total = (amount_per_day)   *  ( estimated_age - age);
 //console.log("you will neend"+ total +"" + snack + "to last you until the ripe old age of"+ estimated_age);

 //var age =15;
 //var maxage=15;
 //var numperday=3;
 //var totalneeded=(365*numperday) *(maxage-age);
 //console.log ("you will neend" + totalneeded + "" + snack + "to last you until the ripe old age of" +maxage);
                  // --end--5


    