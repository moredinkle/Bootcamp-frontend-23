//exercise 1
function smallestInArray(arr) {
//   min = arr.reduce((a,b) => Math.min(a,b))
  return Math.min(...arr);
}

let arr1 = [12, 6, 10, 2, 45, 100];
console.log(smallestInArray(arr1));



//exercise 2
function leastFrequent(arr) {
  let count = arr.map((it) => (it = arr.filter((x) => x === it).length));
  let min = count.indexOf(Math.min(...count));
  return arr[min];
}
//a tambien cumple la condición
arr1 = [3, "c", "c", "a", 2, 3, "c", 3, "c", 2, 4, 9, 9];
console.log(leastFrequent(arr1));



//exercise 3
function removeDuplicate(arr) {
  let count = arr.map((it) => (it = arr.filter((x) => x === it).length));
  let res = [];
  count.map((it, index) => {
    if (it === 1) res.push(arr[index]);
  });
  return res;
}

arr1 = [7, 9, 1, "a", "a", "f", 9, 4, 2, "d", "d"];
console.log(removeDuplicate(arr1));



//exercise 4
function concatArrays(arrOfArr) {
  return arrOfArr.map((it) => it.toString().replaceAll(",", " "));
}
let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];
console.log(concatArrays(data));
