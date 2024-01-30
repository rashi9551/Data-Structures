class MinHeap{
    constructor(){
        this.heap=[]
    }
    buildHeap(arr){
        this.heap=arr
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(currentIndex){
        let leftIndex=this.leftChild(currentIndex)
        let endIndex=this.heap.length-1

        while(leftIndex<=endIndex)
        {
            let rightIndex=this.rightChild(currentIndex)
            let indexToShift;

            if(rightIndex<=endIndex && this.heap[leftIndex]<this.heap[rightIndex]){
                indexToShift=leftIndex
            }
            else{
                indexToShift=rightIndex
            }

            if(this.heap[currentIndex]>this.heap[indexToShift]){
                this.swap(this.heap,currentIndex,indexToShift)
                currentIndex=indexToShift
                leftIndex=this.leftChild(currentIndex)
            }else{
                return
            }
        }

    }
    shiftUp(currentIndex){
        let parentIndex=this.parent(currentIndex)
        while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex]){
            this.swap(this.heap,currentIndex,parentIndex)
            currentIndex=parentIndex
            parentIndex=this.parent(currentIndex)

        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    swap(arr,i,j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    parent(i)
    {
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return 2*i+1
    }
    rightChild(i){
        return 2*1+2
    }
    print(){
        console.log(this.heap);
    }
}
let arr=[3,7,5,2,0,7,9,8]
const m=new MinHeap()
m.buildHeap(arr)
m.insert(-1)
m.print()