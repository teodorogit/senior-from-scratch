// I understand that typescript its not a new language but a jeature for javascript, and its very improtant to build a beauty and strong bases in javascript  ( maybe other language  like c, c#) to beggin learn typescript, at the first contact i saw that typecript provides greats tools to type code using INTERFACE AND TYPES, and thats its very helpful becase sometimes javascript just return 'undefined' instead and error like "this value its no  a number" ( as func may expect):



// const user = {
//   name: "Daniel",
//   age: 26,
// };
// user.location; // returns undefined

// uncalled functions, #############

// function flipCoin() {
//   // Meant to be Math.random()
//   return Math.random < 0.5;
// Operator '<' cannot be applied to types '() => number' and 'number'.
// }


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}
 
@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}
 
const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
 
// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
bug.reportingURL;