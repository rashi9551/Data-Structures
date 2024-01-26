// let arr=[2,8,7,5,7,9,7,5,0]


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

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.splice(mid)

//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sorted=[]
//     while(left.length && right.length)
//     {
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort(arr));

let arr=[4,3,2,6,7,4,2,1,9]


// for(i=0;i<arr.length;i++)
// {
//     let min=i
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


// for(i=0;i<arr.length;i++)
// {
//     let j=i
//     while(j>=0 && arr[j]<arr[j-1])
//     {
//         let temp=arr[j-1]
//         arr[j-1]=arr[j]
//         arr[j]=temp
//         j--
//     }

// }
// console.log(arr);

// let k=0
// while(k<arr.length){
//     let flag=false
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]>arr[i+1])
//         {
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             flag=true
//         }
//     }
//     if(!flag)
//     {
//         break;
//     }
//     k++
// }
// console.log(arr);

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
//         if(arr[i]>pivot)
//         {
//             right.push(arr[i])
//         }
//         else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr));


// function mergeSort(arr)
// {
//     if(arr.length<2)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right)
// {
//     let sort=[]
//     while(left.length &&  right.length)
//     {
//         if(left[0]<right[0])
//         {
//             sort.push(left.shift())
//         }else{
//             sort.push(right.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }

// console.log(mergeSort(arr));


// class stack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }

//     enque(value){
//         this.stack1.push(value)
//     }
//     deque(){
//         while(this.stack1.length)
//         {
//             this.stack2.push(this.stack1.pop())
//         }

//         return this.stack2.pop()

//     }
// }

// const stackey=new stack()
// stackey.enque(7)
// stackey.enque(6)
// stackey.enque(5)
// stackey.enque(4)
// stackey.enque(2)
// console.log(stackey.deque());


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
        
    }

    push(value){
        const node=new Node(value)
        node.next=this.top
        this.top=node

    }
    print(){
        let curr=this.top
        while(curr)
        {
            console.log(curr.value);
            curr=curr.next
        }

    }
    pop()
    {
        this.top=this.top.next
    }
}

const stackey=new stack()

stackey.push(5)
stackey.push(4)
stackey.push(3)
stackey.pop()
stackey.print()


