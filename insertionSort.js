
// let arr=[2,3,2,1,9,4,7,6,9,7]

// for(i=0;i<arr.length;i++)
// {
//     let j=i
//     while(j>0&&arr[j]<arr[j-1]){
//         let temp=arr[j]
//         arr[j]=arr[j-1]
//         arr[j-1]=temp
//         j--
//     }
// }
// console.log(arr);



let arr=[2,3,2,1,9,4,7,6,9,7]

for(i=0;i<arr.length;i++)
{
    let j=i
    while(j>0&&arr[j]<arr[j-1])
    {
        let temp=arr[j-1]
        arr[j-1]=arr[j]
        arr[j]=temp
        j--
    }
}

console.log(arr);