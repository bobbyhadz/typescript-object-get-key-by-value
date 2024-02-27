export {};

// EXAMPLE 1 - Get an Object's Key by Value in TypeScript

const obj = {
  name: 'Bobby Hadz',
  department: 'accounting',
  country: 'Chile',
};

// ✅ Using Object.keys()
const result1 = (Object.keys(obj) as (keyof typeof obj)[]).find((key) => {
  return obj[key] === 'accounting';
});

console.log(result1); // 👉️ "department"

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to resolve the issue

// const obj = {
//   name: 'Bobby Hadz',
//   department: 'accounting',
//   country: 'Chile',
// };

// // now the `key` parameter is typed as
// // 👇️ (parameter) key: "name" | "department" | "country"
// const result1 = (Object.keys(obj) as (keyof typeof obj)[]).find((key) => {
//   return obj[key] === 'accounting';
// });

// console.log(result1); // 👉️ "department"

// ---------------------------------------------------

// // EXAMPLE 3 - Using the `Object.entries()` method to get an object's key by value

// const obj = {
//   name: 'Bobby Hadz',
//   department: 'accounting',
//   country: 'Chile',
// };

// let result2 = '';

// Object.entries(obj).find(([key, value]) => {
//   if (value === 'accounting') {
//     result2 = key;
//     return true;
//   }

//   return false;
// });

// console.log(result2); // 👉️ "department"
