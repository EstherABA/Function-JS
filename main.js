// Ex1
Print "Hello World"
function hello (){
    console.log("Hello World")
}

// hello()

//square
function square (x){
    return (x*x)
}

console.log(square(3))

// // Celsius to Fahrenheit 
function  CtoF (celsius) {
    return(celsius*1.8 +32)

}
console.log(CtoF(1))

// //Random Num
function a () {
    console.log(Math.random())
}

a()

// tellFortune
function tellFortune (numOfChild,partnersName,geographicLocation,jobTitle) {
    alert (`you will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numOfChild} kids`);
   
}

tellFortune (2,"avi","RoshhaNikra","proffesor");
tellFortune (10,"yosi","Midreshat Ben Gurion","dogsiter");
tellFortune (4,"Afik","Granada","owenr ice-cream shop");

// //Digit Number
function convert(x) {
    let a = x.toLocaleString('en-US');
    console.log(typeof(a));
    return a 
} 

console.log(convert(12345678))

// vowels removed//
function  vowelsRemoved(x) {
    
    let b = x.replace(/[aeiou]/gi,'');
    return  b 
}

console.log(  vowelsRemoved("ZaeZioZu")  ) ;

//number rounded//
function numberRounded (num) {
    return Math.round(num)
    
}

console.log(numberRounded(6.66))

//first letter of each word capitalized
function capitalized (str,strTwo) {
    let a = str.charAt(0).toUpperCase() + str.slice(1);
    let b = strTwo.charAt(0).toUpperCase() + strTwo.slice(1);
    return a + b

}

console.log(capitalized("sun", "home")) ;

//hostname
function saveTheHostName (){
    let hostname = location.hostname;
    alert(`Hello, your hostname is ${hostname}_Welcome!`)

}

console.log(save())
