let myname ="explorer"
console.log(myname)

let myage = 15;
console.log(myage);

const mycountry ="Nigeria";
console.log(mycountry)

// Object
// let person ={
//     firstname: "Explorer",
//     lastname: "James",
//     job: "Junior developer",
//     country: "Nigeria",
//     facaulty: "law"
// // }
// console.log(person)
// console.log(person.job)
// used to get only the job in the Object 
let state1 ={
    name: "Kwara",
    capital: "illorin",
   }
let state2 ={
    name: "Bayelsa",
    capital: "Yenagoa",
}

let state3 ={
    name: "Rivers",
    capital: "Portharcourt"
}
let state4 ={
    name: "Akwaiborm",
    capital: "Uyo",
}
let state5 ={
    name: "Akwaiborm",
    capital: "Uyo",
}

let state6 ={
    name: "Enugu",
    capital: "Enugu",
}
let state7 ={
    name: "Edo",
    capital: "Benin",
}
let state8 ={
    name: "Lagos",
    capital: "Ikeja",
}
let state9 ={
    name: "Oyo",
    capital: "Ibadan",
}
let state10 ={
    name: "Abia",
    capital: "Umuahia",
}

console.log(state1)
console.log(state2)
console.log(state3)
console.log(state4)
console.log(state5)
console.log(state6)
console.log(state7)
console.log(state8)
console.log(state9)
console.log(state10)


let sum =(36 + 47);
console.log(sum)

let subtract =(36 - 47);
console.log(subtract)

let divide =(36 / 47);
console.log(divide)

let multiply =(36 * 47);
console.log(multiply)

let strictequal =(36 ===47);
console.log(strictequal)

let greaterthan =( 36 > 47);
console.log(greaterthan)

let lessthan =(36 < 47);
console.log(lessthan)


let footballage= 16;
if( footballage>=18){
    console.log("you are eligible to play football")
}
else{
    console.log("you are not eligible to play football")
}

let basketballage= 20;
if( basketballage>20){
    console.log("you are eligible to play basketball")
}
else{
    console.log("you are not eligible to play basketball")  
}

let clickme = document.getElementById("clickme");
let title = document.getElementById("title");
let view = document.getElementById("view");
let check = document.getElementById("do")

clickme.addEventListener("click", function() {
    alert("you clicked me")
    title.style.color = "red"
    title.style.fontSize = "50px"

})
view.addEventListener("click", function() {
        view.style.backgroundColor ="blue"
        view.style.border ="2px solid red"                   

});

check.addEventListener("click", function() {
    alert("you clicked me")
});


// operators use to perform opertions
let a =20;
let b =50;
console.log( a +b)

function addNumbers(){
    let num1 =Number(document.getElementById("num1").value);
    let num2 =Number(document.getElementById("num2").value);
    let sum = num1 + num2;
    document.getElementById("answer").textContent =sum;

}
let sumNumber = document.getElementById("sumNumber");
sumNumber.addEventListener("click", addNumbers)

function subtractNumbers(){
    let sub1 =Number(document.getElementById("sub1").value);
    let sub2 =Number(document.getElementById("sub2").value);
    
    let minus = sub1 - sub2;
    document.getElementById("ans").textContent =minus;

}
let subNumber = document.getElementById("subNumber");
subNumber.addEventListener("click", subtractNumbers)

function multiplyNumbers(){
    let mult1 =Number(document.getElementById("mult1").value);
    let mult2 =Number(document.getElementById("mult2").value);

    let times = mult1 * mult2;
    document.getElementById("an").textContent  =times;

}
let minNumber = document.getElementById("minNumber");
minNumber.addEventListener("click", multiplyNumbers);


let change= document.getElementById("changeColor");
    document.body.style.backgroundColor = "white"
    change.addEventListener("click", function(){
        if(document.body.style.backgroundColor ==="white"){
            document.body.style.backgroundColor ="green";
        }else{
            document.body.style.backgroundColor ="white";
        }
})

let myPassword= document.getElementById("myPassword");
let myButton = document.getElementById("togglePassword")
myButton.addEventListener("click", function(){
   if (myPassword.type === "password"){
    myPassword.type ="text"; 
   }else {
    myPassword.type ="password";
   }
})


function add(a, b){
    return a+b;
}
console.log(add(6,7))
add()

let disapear = document.getElementById("disapear");
let hide = document.getElementById("hide");

function hidden(){
    hide.style.display ="none"
}
disapear.addEventListener("click", hidden)