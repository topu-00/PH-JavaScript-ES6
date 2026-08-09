const getGrade = (mark) => {
    return mark >= 90 ? "A+" : mark >= 80 ? "A" : mark >= 60 ? "B+" : "Fail";
};
const addGrade = (students) => {
    let modifiedStudents = students.map((student) => {
        const { name, mark } = student;
        let studentWithGrade = { name, mark, grade: getGrade(mark) };
        return studentWithGrade;
    });
    return modifiedStudents;
}
let student = [
    {
        name: "Max",
        mark: 100
    },
    {
        name: "Max1",
        mark: 90
    },
    {
        name: "Max2",
        mark: 80
    },
    {
        name: "Max3",
        mark: 70
    },
    {
        name: "Max4",
        mark: 60
    },
    {
        name: "Max5",
        mark: 50
    },
    {
        name: "Max6",
        mark: 40
    }
]
console.log(addGrade(student));