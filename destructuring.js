const arr = [10, 20, 30, 40, 50];
const [a, b, , , c] = arr;
console.log(a, b, c);

const student = {
    name: "max",
    age: 23,
    age: 46,  
    marks: {
        phy: 20,
        math: 30,
        bio: 99
    }
}

const { name, age: currentAge, marks } = student
console.log(name, currentAge, marks);

const { age: currentAge1, marks: { phy, math, bio } } = student
console.log(name, currentAge1, phy, math, bio);