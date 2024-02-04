class minHeap{
    constructor()
    {
        this.heap=[]
    }
    buildHeap(arr)
    {
        this.heap=arr
        for(let i=this.parent(this.heap.length-1);i>=0;i--)
        {
            this.shiftDown(i)
        }

    }
    peek()
    {
        return this.heap[0]
    }
    heapSort()
    {
        let sort=[]
        while(this.heap.length!=0)
        {
            let min=this.peek()
            sort.push(min)
            this.remove()
        }
        return sort
    }
    shiftDown(currentIndex)
    {
        let endIndex=this.heap.length-1
        let leftIndex=this.leftChild(currentIndex)

        while(leftIndex<=endIndex)
        {
            let rigthIndex=this.rightChild(currentIndex)
            let indexShift;

            if(rigthIndex<=endIndex && this.heap[rigthIndex]<this.heap[leftIndex])
            {
                indexShift=rigthIndex
            }
            else{
                indexShift=leftIndex
            }

            if(this.heap[currentIndex]>this.heap[indexShift])
            {
                this.swap(this.heap,currentIndex,indexShift)
                currentIndex=indexShift
                leftIndex=this.leftChild(currentIndex)
            }else{
                return
            }
        }
    }
    remove()
    {
        this.swap(this.heap,0,this.heap.length-1)
        this.heap.pop()
        this.shiftDown(0)
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)

    }
    shiftUp(currentIndex)
    {
        let parentIndex=this.parent(currentIndex)
        while(currentIndex>0 && this.heap[currentIndex]<this.heap[parentIndex])
        {
            this.swap(this.heap,currentIndex,parentIndex)
            currentIndex=parentIndex
            parentIndex=this.parent(currentIndex)
        }
    }

    parent(i)
    {
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
}
let arr=[4,7,6,9,4,2]
const h=new minHeap()
h.buildHeap(arr)
h.insert(0)
h.remove()
h.display()
console.log(h.heapSort());

