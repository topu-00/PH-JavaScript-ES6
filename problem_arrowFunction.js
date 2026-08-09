const calculateShipping = (amount, shippingFee = 60) => {
    return amount >= 1000 ? "Free Shipping!" : `Shipping fee: ${shippingFee} taka`;
};
console.log(calculateShipping(1000));
console.log(calculateShipping(999));
console.log(calculateShipping(999, 100));



const getGrade = (mark) => {
    return typeof mark != "number" ? "Invalid" : mark >= 90 ? "A+" : mark >= 80 ? "A" : mark >= 60 ? "B+" : "fail";
}
console.log(getGrade(100));
console.log(getGrade(90));
console.log(getGrade(80));
console.log(getGrade(60));
console.log(getGrade(50));
console.log(getGrade("number"));