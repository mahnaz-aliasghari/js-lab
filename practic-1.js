let height = prompt("enter your height  please");
let weight = prompt("enter your weight please");
let bmi = weight / ((height * height)/10000);
if (bmi < 18.5) {
    console.log("your less weigh");
}
else if (bmi > 18.5 && bmi < 24.9) {
    console.log("your ok")
} 
else if(bmi > 24.9) {
    console.log("your over weigh");
}