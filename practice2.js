let frinds=(a,b,c,d)  =>[a,b,c,d] ;
let arrays=frinds('alif','siam','asif','khalus');
const newArray=[];
for(array of arrays){
  console.log(array,array.length);
  if (array.length%2===0){
    newArray.push(array);
    
  }
  
  
}
console.log(newArray);

