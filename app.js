function findEven(arr){
 arr.forEach(num =>{
   if(num % 2 === 0){
     console.log(`${num} is even`)
   }
 })
}

const arrays = [1,2,3,4,5,6,7,8,9,10];

findEven(arrays)