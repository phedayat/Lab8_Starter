// sum.test.js

function sum(x, y){
  return x + y;
}

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1+2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});