let arr=[2,8,7,5,7,9,7,5,0]


// let k=0

// while(k<arr.length)
// {
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]>arr[i+1])
//         {
//             let temp=arr[i+1]
//             arr[i+1]=arr[i]
//             arr[i]=temp
//         }
//     }
//     k++
// }
// console.log(arr);

// for(i=0;i<arr.length;i++)
// {
//     j=i
//     while(j>0&&arr[j]<arr[j-1])
//     {
//         let temp=arr[j-1]
//         arr[j-1]=arr[j]
//         arr[j]=temp
//         j--
//     }
// }
// console.log(arr);

// for(i=0;i<arr.length;i++)
// {
//     min=i
//     for(j=i;j<arr.length;j++)
//     {
//         if(arr[min]>arr[j])
//         {
//             min=j
//         }
//     }
//     let temp=arr[min]
//     arr[min]=arr[i]
//     arr[i]=temp
// }
// console.log(arr);

// function quickSort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let pivot=arr[0]
//     let left=[]
//     let right=[]
//     for(i=1;i<arr.length;i++)
//     {
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr));

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.splice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted=[]
    while(left.length && right.length)
    {
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

console.log(mergeSort(arr));

