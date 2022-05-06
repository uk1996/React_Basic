const { produce } = require('immer');

const baseState = [
  {
    todo: 'Learn ES6+',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
];

const newbaseState = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ todo: 'Tweet about it' });
});

console.log(baseState);
console.log(newbaseState);
