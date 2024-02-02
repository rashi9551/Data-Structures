// class Node{
//     constructor(value)
//     {
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class tree{
//     constructor(){
//         this.root=null
//     }


//     min(root)
//     {
//         if(!root.left)
//         {
//             return root.value
//         }
//         else{
//             this.min(root.left)
//         }
//     }
//     max(root)
//     {
//         if(!root.right)
//         {
//             return root.value
//         }
//         else{
//             this.min(root.right)
//         }
//     }

//     insert(value){
//         const node=new Node(value)
//         if(!this.root)
//         {
//             this.root=node
//         }else{
//             this.insertHelper(this.root,node)
//         }
//     }
//     insertHelper(root,node)
//     {
//         if(node.value<root.value)
//         {
//             if(!root.left)
//             {
//                 root.left=node
//             }else{
//                 return this.insertHelper(root.left,node)
//             }
//         }else {
//             if(!root.right)
//             {
//                 root.right=node
//             }else{
//                 return this.insertHelper(root.right,node)
//             }
//         }
//     }
//     delete(target){
//         this.root=this.deleteHelper(this.root,target)
//     }

//     deleteHelper(root,target)
//     {
//         if(!root)
//         {
//             return root
//         }
//         if(target<root.value)
//         {
//             root.left=this.deleteHelper(root.left,target)
//         }
//         else if(target>root.value){
//             root.right=this.deleteHelper(root.right,target)
//         }else{
//             if(!root.left && !root.right)
//             {
//                 return null
//             }
//             if(!root.left)
//             {
//                 return root.right

//             }
//             if(!root.right)
//             {
//                 return root.left
//             }else{
//                 root.value=this.min(root.right)
//                 root.right=this.deleteHelper(root.right,target)
//             }
//         }
//         return root
//     }
//     findPath(root,target){
//         let path=[]
//         let curr=root
//         while(curr!=null)
//         {
//             path.push(curr.value)
//             if(curr.value===target)
//             {
//                 path.pop()
//                 return path
//             }
//             if(target<curr.value)
//             {
//                 curr=curr.left
//             }
//             else{
//                 curr=curr.right
//             }
//         }
//         return null
        
//     }

//     ancestor(node1,node2){
//         let path1=this.findPath(this.root,node1)
//         let path2=this.findPath(this.root,node2)
//         let commom=0
//         for(let i=0;i<path1.length;i++)
//         {
//             if(path1[i]===path2[i]){
//                 commom=path1[i]
//             }else{
//                 break;
//             }
//         }
//         return commom
//     }
//     height(root)
//     {
//         if(root==null)return 0
//         let left=this.height(root.left)
//         let right=this.height(root.right)
//         return Math.max(left,right)+1
//     }
//     closest(root,target)
//     {
//         let closest=root.value
//         while(root!=null)
//         {
//             if(Math.abs(target-root.value)<Math.abs(target-closest))
//             {
//                 closest=root.value
//             }else if(target<root.value){
//                 root=root.left
//             }else{
//                 root=root.right
//             }
//         }
//         return closest
//     }
//     inOrder(root){
//         if(root)
//         {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
// }

// const t=new tree()
// t.insert(5)
// t.insert(1)
// t.insert(8)
// t.insert(7)
// t.insert(2)
// t.inOrder(t.root)
// console.log(t.findPath(t.root,7))
// console.log(t.ancestor(1,2));
// console.log("height",t.height(t.root));

// class minHeap{
//     constructor()
//     {
//         this.heap=[]

//     }
//     parent(i)
//     {
//         return Math.floor((i-1)/2)
//     }
//     rightChild(i)
//     {
//         return 2*i+2
//     }
//     leftChild(i){
//         return 2*i+1
//     }
//     swap(arr,i,j)
//     {
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//     buildHeap(arr)
//     {
//         this.heap=arr
//         for(let i=this.parent(this.heap.length-1);i>=0;i--)
//         {
//             this.shiftDown(i)
//         }
//         console.log("kayinju");
//     }
//     remove(){
//         this.swap(this.heap,0,this.heap.length-1)
//         this.heap.pop()
//         this.shiftDown(0)
//     }
//     display(){
//         console.log(this.heap);
//     }
//     insert(value)
//     {
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }
//     shiftUp(currentIndex)
//     {
//         let parentIndex=this.parent(currentIndex)
//         while(currentIndex>0&& this.heap[parentIndex]>this.heap[currentIndex])
//         {
//             this.swap(this.heap,currentIndex,parentIndex)
//             currentIndex=parentIndex
//             parentIndex=this.parent(currentIndex)
//         }
//     }

//     shiftDown(currentIndex){
//         let endIndex=this.heap.length-1
//         let leftIndex=this.leftChild(currentIndex)

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
//     peek()
//     {
//         return this.heap[0]
//     }
//     heapSort(){
//         let sorted=[]
//         while(this.heap.length!=0)
//         {
//             let min=this.peek()
//             sorted.push(min)
//             this.remove()
//         }
//         return sorted
//     }
// }

// const h=new minHeap()
// let arr=[3,6,7,1,5,9,8]
// h.buildHeap(arr)
// h.insert(0)
// h.remove()
// h.display()
// console.log(h.heapSort());