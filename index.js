// let age: number = 20;
// console.log(`Age is: ${age}`);
// let greet: string = "Hello, World!";
// console.log(greet);
// let isActive: boolean = true;
// if (isActive) {
//   console.log("The system is active.");
// }
// let username: string = "RicoAlentijo";
// let password: string = "securePssword123";
// if (username === "RicoAlentijo" && password === "securePassword123") {
//   console.log("Access granted.");
// } else {
//   console.log("Access denied");
// }
var username = "RicoAletijo";
var password = "securePassword123";
function login(user, pass) {
    if (user === "RicoAlentijo" && pass === "securePassword123") {
        console.log("access granted");
    }
    else {
        console.log("access denied");
    }
}
login(username, password);
