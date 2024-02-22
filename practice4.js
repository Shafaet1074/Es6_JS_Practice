const createArray = (...elements) => elements;
const Arr1 =createArray(1,2,3);
const Arr2=createArray(4,5,6);

const mergedArray=[...Arr1,...Arr2];
const arrayMax=Math.max(...mergedArray);
console.log(arrayMax);