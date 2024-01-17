

let arr=[1,2,3,4,5,6,7,8,9,10]
let target=7

let reasult=binarySearch(arr,target)

function binarySearch(arr,target,s=0,e=arr.length-1){
    if(s>e){
        return -1
    }
    let mid=Math.floor((e+s)/2)

    if(arr[mid]===target)return mid

    if(arr[mid]>target){
        return binarySearch(arr,target,s,mid-1)
    }

    return binarySearch(arr,target,mid+1,e)
}
console.log(reasult);