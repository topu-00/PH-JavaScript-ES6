let arr = [10, 20, 40, 12, 234, 97];
let product = arr.find((ele) => ele >= 21);//Find the 1st element for the array which is satisfy condition;
console.log(product);


let phone = [
    {
        model: "I phone5",
        price: 10000
    },
    {
        model: "I phone6",
        price: 15000
    },
    {
        model: "I phone7",
        price: 20000
    },
    {
        model: "I phone8",
        price: 25000
    },
    {
        model: "I phone9",
        price: 30000
    },
    {
        model: "I phoneX",
        price: 40000
    },
    {
        model: "I phone14",
        price: 90000
    },
    {
        model: "I phone15",
        price: 100000
    },
    {
        model: "I phone16",
        price: 120000
    },
    {
        model: "I phone17",
        price: 170000
    }
];
let expensivePhone = phone.filter((phone) => phone.price >= 50000);// find all element from array which is satisfy condition;
let cheepPhone = phone.filter((phone) => phone.price < 50000);
console.log("Expensive Phone");
expensivePhone.forEach((ele) => console.log(ele.model));
console.log("Cheep Phone");
cheepPhone.forEach((ele) => console.log(ele.model));