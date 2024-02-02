class minHeap{
    constructor(){
        this.heap=[]
    }

    builtHeap(arr)
    {
        this.heap=arr
        for(let i=this.parent(this.heap.length-1);i>0;i--)
        {
            this.shiftDown(i)
        }
    }
    insert(value){
        this.heap.push(value)
        this.ShiftUp(this.heap.length-1)
    }

    ShiftUp(currentIndex){
        let parentIndex=this.parent(currentIndex)
        while(currentIndex>0 && this.heap[currentIndex]<this.heap[parentIndex])
        {
            this.swap(this.heap,currentIndex,parentIndex)
            currentIndex=parentIndex
            parentIndex=this.parent(currentIndex)
        }
    }

    shiftDown(currentIndex)
    {
        let endIndex=this.heap.length-1
        let leftIndex=this.leftChild(currentIndex)

        while(leftIndex<=endIndex)
        {
            let rightIndex=this.rightChild(currentIndex)
            let indexToShift;

            if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex])
            {
                indexToShift=rightIndex
            }else{
                indexToShift=leftIndex
            }

            if(this.heap[currentIndex]>this.heap[indexToShift])
            {
                this.swap(this.heap,currentIndex,indexToShift)
                currentIndex=indexToShift
                leftIndex=this.leftChild(currentIndex)
            }else{
                return
            }
        }
    }

    parent(i){
        return Math.floor((i-1)/2)
    }

    leftChild(i)
    {
        return 2*i+1
    }
    rightChild(i)
    {
        return 2*i+2
    }

    swap(arr,i,j)
    {
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    display()
    {
        console.log(this.heap);
    }
    peek(){
        return this.heap[0]
    }

    remove(){
        this.swap(this.heap,0,this.heap.length-1)
        this.heap.pop()
        this.shiftDown(0)
    }

    heapSort(){
        let sorted=[]
        while(this.heap.length>0)
        {
            let min=this.peek()
            console.log(min);
            sorted.push(min)
            this.remove()
        }
        return sorted
    }
}
let arr=[1,7,5,9,1,8]
const h=new minHeap()
h.builtHeap(arr)
h.insert(0)
h.display()
console.log(h.heapSort())


// class maxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(arr)
//     {
//         this.heap=arr
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         {
//             this.shiftDown(i)
//         }

//     }

//     swap(arr,i,j)
//     {
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//     shiftDown(currentIndex)
//     {
//         let endIndex=this.heap.length-1
//         let leftIndex=this.leftChild(currentIndex)

//         while(leftIndex<=endIndex)
//         {
//             let rightIndex=this.rightChild(currentIndex)
//             let indexToShift;

//             if(rightIndex<=endIndex && this.heap[rightIndex]>this.heap[leftIndex])
//             {
//                 indexToShift=rightIndex
//             }
//             else{
//                 indexToShift=leftIndex
//             }

//             if(this.heap[currentIndex]<this.heap[indexToShift])
//             {
//                 this.swap(this.heap,currentIndex,indexToShift)
//                 currentIndex=indexToShift
//                 leftIndex=this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }
//     }
//     display(){
//         console.log(this.heap);
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i)
//     {
//         return 2*i+1
//     }
//     rightChild(i){
//         return 2*i+2
//     }
// }
// let arr=[7,5,9,6,8,9,2,3,4]
// const h=new maxHeap()

// h.buildHeap(arr)
// h.display()