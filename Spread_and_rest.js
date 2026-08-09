console.log("----Spread Operator----");
//Array
let arr = [30, 40, 50, 60, 70, 80];
console.log(arr);
//Spread
console.log(...arr);

let maxNum = Math.max(arr);//Not Work because math.max accept collection of number, not array.
let maxNum2 = Math.max(...arr);
console.log(maxNum);
console.log(maxNum2);


let arr2 = arr;//If arr update arr2 also update; connect with reference;
let arr3 = [...arr];//Not connect with arr; copy arr on the arr3;
let arr4 = [...arr, 29, 35, 78];

console.log(arr2);
console.log(arr3);
console.log(arr4);


//Object
let student = {
    name: "Max",
    Id: 10
};
//console.log(...student); //console.log(...student); Not Work : type error;
console.log(student);

let student2 = student; //If student. object update student2 also update; connect with reference;
let student3 = { ...student };//Not connect with student object; copy student object on the student3;

student.something = "Text";
console.log(student2);
console.log(student3);


//----Rest Operator----
console.log("----Rest Operator----");


function sum(a, b, c, ...nums) { //If use "..." as function parameter thats call rest operator; 
    console.log(nums);
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return a + b + c + sum;
}
console.log(sum(12, 8, 10, 30, 40, 100, 200));
