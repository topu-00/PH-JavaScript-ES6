let name = "Topu";
let location = `Badda, Dhaka`;
console.log(location);
let price = 99;
let quentity = 5;
let message = "Hello " + name + ".Your Bill is " + price;
console.log(message);

//Template String
let message2 = `Hello,${name}.Your Bill is ${price}`;
console.log(message2);

let message3 = `Hello,${name}.Your Bill is ${price * quentity}`;
console.log(message3);

let ammount = 384;


function admissionConfarmationMail(name, amount) {
    let message4 = `Hello ${name || "Student"},
                Your Payment is Successful.
                Your Paid amount is ${ammount}`;
    return message4;
}
console.log(admissionConfarmationMail("Max", 577));
console.log(admissionConfarmationMail("",577));