'use strict';
const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question);
console.log(Object.entries(openingHours));
const hoursOpen = new Map(Object.entries(openingHours));
console.log(hoursOpen);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}
const answer = Number(prompt('Enter your answer.'));
console.log(answer);

const correctAns = (answer === 3 && question.get(true)) || question.get(false);
console.log(correctAns);

//convert map to array

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
