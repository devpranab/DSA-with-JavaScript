//Binary search
//https://medium.com/mlwhiz/solve-almost-every-binary-search-problem-dc347af2c61a

let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];


function binarySearch(numbers, target){
let start = 0;
let end = numbers.length - 1;
while (start <= end) {
    let mid = Math.floor((start + end)/2);
    if(numbers[mid] === target){
        console.log("Item found in position", mid);
        return mid;
    }
    if(numbers[mid] < target){
        start = mid + 1;
    }
    if(numbers[mid] > target){
        end = mid - 1;
    }
  }
  return -1;
}

const target = 29;
const index = binarySearch(numbers, target);
console.log(index);