/*
// unary operators:
let a=5
let b=2
a++;a become 6
b--;//become 1
*/
/*
let a=5
let b=2
++a;//a become 6
--b;//b become 1
*/
/*
let a: number=5;
let b: number=2;
let c: number;
c= ++a + a++ + --b + b-- + a + b++ + b;
console.log (c);
*/
/*
// combining operators
let result = 3 + 4 * 5 ;
console.log(result)
//answer 23
*/
/*
let result2 = 3 + 4 * 5;
result2 ++
console.log(result2)
// answer 24
*/
//BMI
let weightInKg = 70;
let heightInMeters = 1.75;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(`youe BMI is ${bmi}`);
//Assignment operators
let c = 10;
c += 5;
/*// comparison operators
5== 2 is false
5!=2 is true
5> 2 is true
5< 2 is false
and
let a=5
let b=2
let isEqual =(a==b);// false
let inNotEqual(a==b);//ture
let isNotEqual= (a !=b);// true
let isGreaterThen =(a > b) //true
let isLessThan =( a < b);// false
*/
//logical Operators
/*
(5 > 0) && (2 > 0) is true
(5 < 0) || (2 > 0) is true
!(5 > 0 )is false
*/
// logical Statments if and if else statements
/*let isRaining =true;
if(isRaining){
    console.log("Wear a raincoat.");
} else {
    console.log("Wear sunglasses.");
}
*/
//Else if statements
let weather = "cloudy";
if (weather === "raining") {
    console.log("wear a raincoat.");
}
else if (weather === "cloudy") {
    console.log("wear a light jacket.");
}
else {
    console.log("wear sunglasses");
}
export {};
