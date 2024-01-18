let arr=["apple","orange",'pineapple',"watermelon"]

function concate(arr,i = 0){
    if(i===arr.length-1)
     return arr[i]
    
    return  concate(arr,i+1) + arr[i]
}

console.log(concate(arr));


   






