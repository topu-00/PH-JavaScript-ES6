function receipt_generator(name, price, quantity) {
    return `${name} x ${price} = ${price * quantity}`;
}
console.log(receipt_generator("pen", 3, 20));
