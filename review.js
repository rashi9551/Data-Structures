let arr=[1,2,3,4,5,6,7]

function recursion(arr,target,s=0,e=arr.length-1){
    if(s<=e){
        return 
    }
    if(arr[mid]===target){
        return mid
    }
    let mid=Math.floor((e+s)/2)
    if(arr[mid]>target){
        return recursion(arr,target,mid+1,e)
    }
    else{
        return recursion(arr,target,s,mid-1)
    }

}
console.log(recursion(arr,5));