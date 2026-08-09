const responseExtractor = (obj) => {
    const { user: { name: UserName, age = 18 } } = obj;
    console.log(UserName, age);
}
responseExtractor({ user: { name: "Max", age: 20 } });
responseExtractor({ user: { name: "Topu", age: 30 } });
responseExtractor({ user: { name: "Max" } });


//Swap two Number
let a = 10;
let b = 20;
[b, a] = [a, b];
console.log(a, b);

let nums = [10, 20, 30, 40, 50, 60];
let [first, second, ...rest] = nums;
console.log(first, second, rest);