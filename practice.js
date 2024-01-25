let arr=[4,2,1,7,5,6,9,8]

// function mergeSort(arr)
// {
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right)
// {
//     let sorted=[]
//     while(left.length && right.length)
//     {
//         if(left[0] < right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())

//         }

//     }
//     return [...sorted,...left,...right]

// }

// console.log(mergeSort(arr));

// function quickSort(arr){
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let pivot=arr[0]
//     let left=[]
//     let right=[]

//     for(i=1;i<arr.length;i++)
//     {
//         if(arr[i]<pivot)
//         {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr));


// for(i=0;i<arr.length;i++)
// {
//     let j=i
//     while(j>0 && arr[j]<arr[j-1])
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
//     let min=i
//     for(j=i;j<arr.length;j++)
//     {
//         if(arr[j]<arr[min])
//         {
//             min=j
//         }
//     }

//     let temp=arr[min]
//     arr[min]=arr[i]
//     arr[i]=temp
// }

// console.log(arr);


// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);

class Stack{
    constructor()
    {
        this.stack=[]
    }

    push(value)
    {
        this.stack.push(value)
    }
    pop(){
        this.stack.pop()
    }
    peek(){
        console.log(this.stack[0]);
    }
    isEmpty()
    {
        return this.stack.length<=0
    }
    print(){
        console.log(this.stack);
    }
}

const stack=new Stack()
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.pop()
stack.peek()
console.log(stack.isEmpty());
stack.print()





