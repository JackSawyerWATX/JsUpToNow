const developers = ["Bill", "Paul", "Steve", "Satya"]

console.log(developers[0])
console.log(developers[1])
console.log(developers.length)

developers[4] = "Dave"
console.log(developers)

const [first, second, ...rest] = developers;

console.log(first)
console.log(second)
console.log(rest)

developers.push("Charles")
console.log(developers)

developers.pop();
console.log(developers)

developers.unshift("Charles")
console.log(developers)

developers.splice(2, 0, "Tim")
console.log(developers)

console.log(developers.includes("Paul"));
console.log(developers.includes("Allen"));

