console.log("Ôn tập JavaScript");

let a = 10;

if (a > 5) {
    console.log(`${a} lon hơn 5`)
}

(function () {
    console.log("Xin chào!");
})();

function sayHello() {
    console.log("Chào mừng bạn đến với JavaScript!");
}
sayHello();


const sum = (x, y) => {
    return x + y;
}

console.log("Tổng của 5 và 10 là: " + sum(5, 10));
