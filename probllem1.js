const describeDeclaration = (key) => {
    if (key === "let") {
        return "Cannot redeclare, can reassign";
    }
    else if (key === "var") {
        return "Can redeclare, can reassign";
    }
    else if (key === "const") {
        return "Cannot redeclare, cannot reassign";
    }
    else {
        return "Invalid";
    }
}
console.log(describeDeclaration("var"));