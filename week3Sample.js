// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(arr){
//         this.heap=arr
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         {
//             this.shiftDown(i)
//         }

//     }

//     remove()
//     {
//         this.swap(this.heap,0,this.heap.length-1)
//         this.heap.pop()
//         this.shiftDown(0)
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }

//     shiftUp(currentIndex){
//         let parentIndex=this.parent(currentIndex)
//         while(currentIndex>0&&this.heap[currentIndex]<this.heap[parentIndex])
//         {
//             this.swap(this.heap,currentIndex,parentIndex)
//             currentIndex=parentIndex
//             parentIndex=this.parent(currentIndex)
//         }
//     }
//     peek()
//     {
//         return this.heap[0]
//     }
//     heapSort()
//     {
//         let sort=[]
//         while(this.heap.length!=0)
//         {
//             let min=this.peek()
//             sort.push(min)
//             this.remove()
//         }
//         console.log(sort);
//     }


//     display(){
//         console.log(this.heap);
//     }
//     shiftDown(currentIndex)
//     {
//         let endIndex=this.heap.length-1
//         let leftIndex=this.leftChild(currentIndex)

//         while(leftIndex<=endIndex)
//         {
//             let rightIndex=this.rightChild(currentIndex)
//             let indexToShift;

//             if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex])
//             {
//                 indexToShift=rightIndex
//             }
//             else{
//                 indexToShift=leftIndex
//             }

//             if(this.heap[currentIndex]>this.heap[indexToShift])
//             {
//                 this.swap(this.heap,currentIndex,indexToShift)
//                 currentIndex=indexToShift
//                 leftIndex=this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }

//     }
//     swap(arr,i,j){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return 2*i+1
//     }
//     rightChild(i){
//         return 2*i+2
//     }
// }

// let arr=[5,3,6,8,6,3,9,0,-1]

// const h=new minHeap()
// h.buildHeap(arr)
// h.insert(-2)
// h.display()
// h.heapSort()


class Node{
    constructor()
    {
        this.children={}
        this.endNode=false
    }
}
class trei{
    constructor()
    {
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.endNode=true
    }
    search(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.endNode
    }
    prefix(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
        
    } 

}

const t=new trei()
t.insert("rashi")
console.log(t.search("rashi"));
console.log(t.prefix("ras"));