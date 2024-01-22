function mergeSort(arr)
{
    if(arr.length<=1)
    {
        return arr
    }
    const mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const sortedArr=[]
    while(left.length&&right.length)
    {
        if(left[0]<=right[0])
        {
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}
const arr=[1,2,7,6,3,4,5,8,9]
console.log(mergeSort(arr));