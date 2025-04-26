const sayHello = () => {
  return "[return] hello1 , John";
};

// // 寫法 2 arrow
// const sayHello = () => "[return] hello2 , John";

// // 寫法 3
// const sayHello = () => 
//   "[return] hello3 , John";

// const sayHello = () => (
//   "[return] hello3 , John";
// )

// error
// const sayHello = () => {
//   return "[return] hello4 , John";
// };

// // no return
// const sayHello = () => {
//   "[return] hello5 , John";
// };

console.log(sayHello());
