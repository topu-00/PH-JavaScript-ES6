//for empty and multi parameter ->first bracket is required;
//for single parameter -> first bracket is optional;

const sum = (a, b) => a + b; //Implicit return for only one statement ;
console.log(sum(12, 8));


const sum_div = (x) => {
    let sum = 10 + x;
    let div = sum / 2;
    return div;
}
console.log(sum_div(10));


const sum_div2 = x => {
    let sum = 10 + x;
    let div = sum / 2;
    return div;
}
console.log(sum_div2(10));


const sayHi = () => "Hi";
console.log(sayHi());




// Traditional Function Vs Arrow function
console.log(hello());//After Declare we can call the function 
function hello() {
    return 'hello';
}

//console.log(hello2());// Can't do this 
const hello2 = () => "How are You";
console.log(hello2());


const student = {
    name: "Max",
    age: 29,
    showAge: function () {
        console.log(this.name);
        console.log(this.age);
    },
    showName: () => {
        console.log(this.name);//This property not wark on arrow function ; return undefine;
        console.log(this.age);//This property not wark on arrow function ; return undefine;
    }
}
student.showAge();
student.showName();