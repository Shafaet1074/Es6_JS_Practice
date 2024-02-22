const createArray = (...elements) => elements;

const arrays=createArray(1,2,3,4);
let sum=0;
let average
for(const array of arrays){
  // console.log(array);

  const multiply=array*array;
   sum=sum+multiply;
   average=sum/arrays.length

   
  
}
console.log(sum);
console.log(average);


// console.log(array);
