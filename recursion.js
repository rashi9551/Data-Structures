let arr=["apple","orange",'pineapple',"watermelon"]

// function concate(arr,i = 0){
//     if(i===arr.length-1)
//      return 
//     return  concate(arr,i+1)+arr[i]
// }

// let res=concate(arr,)

// console.log(res);
let str=""
function recursion(arr,i){
    if(i===arr.length-1){
        return arr[i]
    }
    
    return recursion(arr,i+1)+arr[i]
}

console.log(recursion(arr,0));
   






