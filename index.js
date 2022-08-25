// values and varaibles

let firstName = "Hobert";
let lastName = " Fired";
let age = 23;
let myData= firstName + lastName +  age;

console.log(firstName)
console.log(age);
// data type
// let, var const
let myBag =" pink";
myBag= "red"
console.log ( typeof myBag)

var num =34;
num = 16;
console.log(num)

// local and global scope
let myColor;
{
 myColor="red";
}
console.log(myColor)

// basic operation
let x = 10;
let y = 14;
let z = 2
let addtionOfxy = x + y;
let subtractionOfxy = y-x;
let divisionOfxz = x/z;
let multiplyxz = x* z;
let remainderzy = y%z;
console.log(addtionOfxy);

console.log(subtractionOfxy, divisionOfxz, multiplyxz, remainderzy)

let middeleName = " Peter"
let birthYear = 1976
let graduationYear;
let parentName = true


console.log(typeof middeleName, typeof birthYear, typeof graduationYear, typeof parentName)

let obj = {
    firstName: "Leran",
    lastName: "Horbert",
    age: 10,
    child:{
        childName : "Femi",
        age : 23
    }
}   
// console.log(obj)
// console.log(obj.child.age);
// dot Notification, brackect notation

// console.log(arr.length);
// console.log(myCar.length);
// arr.shift["nizzan"];
// console.log(arr)
// let obj ={
    // firstName
    // }
    
    let myNewData = " my name is " + obj.firstName +  " " + obj.lastName  + " and I am " + obj.age + " years old.";
    console.log(myNewData)
    // ES6 
    // string literal template
    let myNewDate = ` my name is ${obj.firstName} ${obj.lastName} and I am ${obj.age} years. ${23*10} annually`;
    console.log(myNewDate)
    
    let object ={
        firstName : "kenny",
        lastName : "john",
        age : 23
    }
    console.log(object["firstName"])
    console.log(object["age"])
    function firstAge( oldAge, newAge  ){
        return oldAge * newAge
    }
    console.log(firstAge(10, 14));

    
    let arr =[ "wed", " key", " orange", 256, "man", 900, myCar =["brown" ," pink", 89] ]
    console.log(arr.length)
    arr.unshift("nizzan");
    console.log(arr)
    console.log(arr.length)
    arr.push("CAMRY")
    arr.push("Bmw")
    console.log(arr[arr.length-1])

    let c = 12;
    let d = 13;
    let e;
    
    function salaryAmount( oldSalary, newSalary){
         return e= oldSalary + newSalary
    }
    (salaryAmount(c,d))
    console.log(e)

    // function(){

    // }
    // let arr =[]
    // let obj ={
        // FileReader: "",
    // }
    // Equality operation
    // strict operation === data, value
    // loose operation ==

    const driveAge = "18";
    let ageDived = 18

    console.log(driveAge == ageDived)
// WE CAN ACCESS THE LENGHT OF A STRING
    let adaName = "Ada"
    console.log(adaName.length)

    // conditional statement
    // if else
    // else if
    // switch
    
    const benchmarkForVoting =18;
    const voterAge = 50;

    if ( voterAge === benchmarkForVoting){
        console.log("you are valid")

    } else if ( voterAge < benchmarkForVoting){
        console.log("you are too ypung")
    }
    else{
        console.log("you are too old")
    }
    // if ( voterAge === benchmarkForVoting){
        // console.log("you are valid to vote")
    // } else if( voterAge > benchmarkForVoting){
        // console.log(" you  are eligible")
    // } else{
        // console.log("you are underage")
    // }

    // if( voterAge > benchmarkForVoting){
        // console.log("you are too old")
    // }
    var markHeight = 1.69;
    var markWeight = 78;
    var johnHeight =1.95;
    var johnWeight =92;
    const markBMI = markWeight /(markHeight**2);
    console.log(markBMI);
    const johnBMI =johnWeight / (johnHeight**2);
    console.log(johnBMI)
    let compareBMI = markBMI === johnBMI;
    let compareJohnBMI = johnBMI === markBMI;
    console.log(compareBMI);
    console.log(compareJohnBMI);

    if ( markBMI > johnBMI || johnBMI > markBMI){
        console.log("Marks BMI is higher")
    } else if ( johnBMI > markBMI || markBMI > johnBMI){
        console.log("john bmi is higher")
    }
      
    // falsy of truty

    let p = 10;
    let q =9;
    // let parm;

    // if (p < q && q !=== p){
        // console.log( "true" )
    // } else {
        // console.log("false")
    // }

    // scope
    // global , block, function

    // let newTeacher;
    
    {
        var newTeacher = "Carlt";
    }

    console.log(newTeacher)
function  newHouse(pam, tam) {
    // let parm =newHouse
    return pam + tam
}
console.log( newHouse(p, q))
// let parm =newHouse;
// console.log(parm)
// 
function fruit (apple, orange){
    const fruitProcessor = `I have ${apple} apples and ${orange} oranges`;
    return fruitProcessor  
    // return  apple+ orange  
}

    const newJuice = fruit( 34, 14)
    console.log(newJuice)
    const oldJuice = fruit(12, 2);
    console.log(oldJuice)
    
    // console.log(fruit(20,20))
    function gender(boys, girls){
      const genderMine = `i have ${boys} boys and ${girls} girls`
      return genderMine
    }
    const genderDay = gender(31, 45)
    console.log (genderDay)

    const oldGender = fruit(5, 5)
    console.log(oldGender);
//  callback 
 function multiply( x, y){
    return x*y
 }
//  console.log(addtion(2,10))
function evaluate (a, b, callback){
    return callback (a,b)
}
console.log(evaluate(2, 10, multiply))

// increment of value

let myVar =2;
myVar +=1
console.log(myVar)

// Looping
const arrColor = [ 78 ," yellow", " green", "blueviolet"]

console.log(arrColor[arrColor.length])
for( let i =0; i < arrColor.length; i++){
    console.log(i)
}

// for in

// if statement
console.log(true|| true)
console.log(false|| true)
console.log(true|| false)
console.log(false|| false)
console.log(false && false)
console.log(true && false)
console.log(true && true)

let clientName = 'Fola';
const ageBracket = 18;
let folaAge =18;

if( folaAge === ageBracket && folaAge > ageBracket){
    console.log(`${clientName} is valid to register`)
// } else if(folaAge=== ageBracket){
    // console.log(`${clientName} you are just of age to register`)
} else{
    console.log('not old enough')
}
// truthy falsy

const bagObj={
    firstName: 'Fola',
    lastName: 'fola',
    age: 12
}
console.log(bagObj)

//  class is an object Template
class UserInfo {
    constructor( firstName, lastName, age){
        this.firstName =firstName
        this.lastName = lastName
        this.age= age
    }
}
let user1= new UserInfo("fola", "Dane", 23)
console.log(user1)
let user2 = new UserInfo("Ken", "Jane", 13)
console.log(user2)

// array
// advance array
const colorArray = [[12, 13, [14]], 15, 16, [17, 18], 19, [20, 21]];




console.log(colorArray.length)
console.log(colorArray[0][2][0])
// console.log(colorArray[5][0] )
// colorArray.push(22)
colorArray[0][2].push(23)
console.log(colorArray)
colorArray[3].push(50)
console.log(colorArray)

colorArray[5].unshift(22)
console.log(colorArray)
colorArray.pop()
console.log(colorArray)
let popArray = colorArray.pop()
console.log(popArray)

// let firstArray = colorArray[3][1]
// console.log(firstArray)
// const secondArray =firstArray[2]
// console.log(secondArray)
// console.log(colorArray[0][2][0])
// lenght 1 to anything
// index 0 to anything




