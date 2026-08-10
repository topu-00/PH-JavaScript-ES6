function studentIntroduction(student) {
    if (typeof student !== "object" || student === null) return "Invalid";
    let keys = Object.keys(student);
    if (keys.includes("name") && keys.includes("age") && keys.includes("course")) {
        let { name, age, course } = student;
        return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
    }
    else {
        return "Invalid";
    }
}
