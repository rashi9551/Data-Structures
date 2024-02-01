// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(arr){
//         this.heap=arr
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(currentIndex){
//         let leftIndex=this.leftChild(currentIndex)
//         let endIndex=this.heap.length-1

//         while(leftIndex<=endIndex)
//         {
//             let rightIndex=this.rightChild(currentIndex)
//             let indexToShift;

//             if(rightIndex<=endIndex && this.heap[rightIndex]<this.heap[leftIndex]){
//                 indexToShift=rightIndex
//             }
//             else{
//                 indexToShift=leftIndex
//             }

//             if(this.heap[currentIndex]>this.heap[indexToShift]){
//                 this.swap(this.heap,currentIndex,indexToShift)
//                 currentIndex=indexToShift
//                 leftIndex=this.leftChild(currentIndex)
//             }else{
//                 return
//             }
//         }

//     }
//     shiftUp(currentIndex){
//         let parentIndex=this.parent(currentIndex)
//         while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex]){
//             this.swap(this.heap,currentIndex,parentIndex)
//             currentIndex=parentIndex
//             parentIndex=this.parent(currentIndex)

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
//     swap(arr,i,j){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//     parent(i)
//     {
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return 2*i+1
//     }
//     rightChild(i){
//         return 2*i+2
//     }
//     print(){
//         console.log(this.heap);
//     }
//     peek(){
//         return this.heap[0]
//     }
//     heapSort()
//     {
//         let sort=[]
//         while(this.heap.length>0)
//         {
//             let min=this.peek()
//             sort.push(min)
//             this.remove()
//         }
//         return sort
//     }
// }
// let arr=[3,7,5,2,0,7,9,8]
// const m=new MinHeap()
// m.buildHeap(arr)
// m.remove()
// m.insert(-1)
// console.log(m.heapSort());
// // m.print()


class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }

}

class tree{
    constructor(){
        this.root=null
    }

    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            this.insertHelper(this.root,node)
        }
    }

    insertHelper(root,node)
    {
        if(node.value<root.value)
        {
            if(!root.left)
            {
                root.left=node
            }else{
                return this.insertHelper(root.left,node)
            }
        }else{
            if(!root.right)
            {
                root.right=node
            }else{
                return this.insertHelper(root.right,node)
            }
        }
    }

    preOrder(root){
        if(root){
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
        }
    }
    inOrder(root)
    {
        if(root)
        {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    searchOperation(root,target){
        if(!root)
        {
            return false
        }else{
            if(root.value==target){
                return true
            }
            if(target<root.value){
                return this.searchOperation(root.left,target)
            }else{
                return this.searchOperation(root.right,target)
            }
        }
    }

    max(root){
        if(!root.right){
            return this.root.value
        }else{
            return this.max(root.right)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    delete(value){
        this.root=this.deleteHeper(this.root,value)
    }
    deleteHeper(root,value){
        if(!root){
            console.log("oru karyo illa");
            return null
        }

        if(value<root.value){
            root.left=this.deleteHeper(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteHeper(root.right,value)
        }
        else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteHeper(root.right,root.value)
        }
        return root
    }
}

const treeye=new tree()

treeye.insert(8)
treeye.insert(9)
treeye.insert(10)
treeye.insert(7)
treeye.insert(6)
treeye.insert(5)
treeye.insert(2)
treeye.delete(55)
treeye.preOrder(treeye.root)
console.log(" ");
treeye.inOrder(treeye.root)
console.log(" ");
treeye.postOrder(treeye.root)
console.log("searching",treeye.searchOperation(treeye.root,15));
console.log("max :",treeye.max(treeye.root));
console.log("min :",treeye.min(treeye.root));