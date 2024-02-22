const twoArrays=(array1,array2) =>{
return [...array1, ...array2];
  

} 
const Arr1 =[1,2,3];
const Arr2=[4,5,6];

const mergedArray=twoArrays(Arr1,Arr2);
const arrayMax=Math.max(...mergedArray);
console.log(arrayMax);
