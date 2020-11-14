/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const arr = data.arr;
  const id = data.id;
  let result = 0;
  for (let i = 0; i < 15000; i++) {
    for (const el of arr) {
      result += Math.log(el.weight ** 2);
    }
  }
  postMessage({ id, result});
});
