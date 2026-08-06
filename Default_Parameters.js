function greet(name) {
    console.log("Hello " + name);
}
greet("Max");
greet();

//default parameter
function greet1(name = "max") {
    console.log("Hello " + name);
}
greet1();
greet1("Topu");