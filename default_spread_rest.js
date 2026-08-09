function calculateTotal(discount, ...product) {
    let total = product.reduce((sum, currentNumber) => sum + currentNumber, 0);
    let discount_amount = total * (discount / 100);
    return total - discount_amount;
}
console.log(calculateTotal(10, 20, 30, 40, 50, 60));


let arr = [10, 20, 30, 40, 50];
let arr2 = [40, 70, 80, 20];
let margeArray = [...arr, ...arr2];
let newUniqueArray = [...new Set(margeArray)];
console.log(newUniqueArray);