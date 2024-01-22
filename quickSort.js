function Quicksort(arr)
{
    if (arr.length <= 1) {
        return arr;
      }
    let pivot=arr[0]
    let left=[]
    let right=[]
    for(i=1;i<arr.length;i++)
    {
        if(arr[i]<pivot)
        {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...Quicksort(left),pivot,...Quicksort(right)]
}
let arr=[1,6,4,7,2,3]
let result=Quicksort(arr)
console.log(result);