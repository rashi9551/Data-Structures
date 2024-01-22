let k=0
let arr=[2,4,3,1,9,7,6,3,5]

//     while(k<=arr.length-1){
//     for(i=0;i<arr.length;i++)
//     {
    
//         if(arr[i]>arr[i+1])
//         {
//         let temp=arr[i+1]
//         arr[i+1]=arr[i]
//         arr[i]=temp
//         }
//     }
//     k++
//     }
//     console.log(arr);


while(k<arr.length)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            let temp=arr[i+1]
            arr[i+1]=arr[i]
            arr[i]=temp
        }
    }
    k++
}
console.log(arr);