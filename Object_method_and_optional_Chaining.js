let ExpensiveProduct = (obj) => {
    let keys = Object.keys(obj);
    let highest = 0;
    let highestKey = "";
    for (let key of keys) {
        highest = highest <= obj[key] ? obj[key] : highest;
        highestKey = highest <= obj[key] ? key : highestKey;
    }
    return highestKey;
}
console.log(ExpensiveProduct({ pen: 10, bag: 299, laptop: 29918, book: 8280 }));





let user = {
    name: "max",
    address: {
        city: "Rangpur"
    }
};

let user2 = {
    name: "max",
    address: null
};
const getCity = (user) => {
    return user?.address?.city;
};
console.log(getCity(user));
console.log(getCity(user2));
