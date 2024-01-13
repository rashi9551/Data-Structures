let arr=["apple","orange",'pineapple',"watermelon"]
let i=0
let res=""
// var hai

function concate(arr,i){
    
    if(i===arr.length)
    {
        
        return res
    }

    res+=arr[i]
    
   return concate(arr,++i)
    
}

// let str=""
    let result= concate(arr,i)
    // concate(arr,i)
console.log(result);
   





