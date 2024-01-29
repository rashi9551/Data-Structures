
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
//     insert(value)
//     {
//         const node=new Node(value)
//         if(!this.root)
//         {
//             this.root=node
//         }
//         else{
//             this.insertOperation(this.root,node)
//         }
//     }
//     insertOperation(root,node)
//     {
//         if(node.value<root.value)
//         {
//             if(root.left==null)
//             {
//                 console.log("nadnuu leftil");
//                 root.left=node
//             }
//             else{
//                 return this.insertOperation(root.left,node)
//             }
//         }else{
//             if(root.right==null)
//             {
//                 console.log("nadnuu rigtil");
//                 root.right=node
//             }
//             else{
//                 return this.insertOperation(root.right,node)
//             }
//         }
//     }

//     searchOperation(root,target)
//     {
//         if(!root)
//         {
//             return false
//         }else{
//             if(root.value===target)
//             {
//                 return true
//             }else if(target<root.value)
//             {
//                 return this.searchOperation(root.left,target)
//             }
//             else{
//                 return this.searchOperation(root.right,target)
//             }
//         }
//     }
//     preOrder(root)
//     {
//         if(root)
//         {
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root)
//         {
//             this.inOrder(root.left)
//             console.log("val",root.value)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root)
//         {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     min(root){
//         if(!root.left)
//         {
//             return root.value
//         }
//         else{
//             return this.min(root.left)
//         }

//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         else{
//             return this.max(root.right)
//         }
//     }
//     isBst(root, min) {
//         if (root) {
//             if (!this.isBst(root.left, min)) {
//                 return false; 
//             }
    
//             if (min >= root.value) {
//                 return false;
//             }
//             min = root.value;
//             if (!this.isBst(root.right, min)) {
//                 return false; 
//             }
//         }
//         return true; 
//     }

//     delete(value){
//         this.root=this.deleteHelper(this.root,value)
//     }
//     deleteHelper(root,value)
//     {
//         if(!root)
//         {
//             return root
//         }
//         if(value<root.value)
//         {
//             root.left=this.deleteHelper(root.left,value)

//         }
//         else if(value>root.value)
//         {
//             root.right=this.deleteHelper(root.right,value)
//         }
//         else{
//             if(!root.left&&!root.right)
//             {
//                 return null
//             }
//             if(!root.left)
//             {
//                 return root.right
//             }
//             if(!root.right)
//             {
//                 return root.right
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteHelper(root.right,root.value)
//         }
//         return root
//     }
    
// }

// const treeyey=new tree()
// treeyey.insert(4)
// treeyey.insert(3)
// treeyey.insert(6)
// treeyey.insert(5)
// treeyey.insert(2)
// treeyey.insert(1)
// treeyey.insert(7)
// treeyey.insert(8)
// treeyey.insert(9)
// console.log(treeyey.searchOperation(treeyey.root,4));
// treeyey.preOrder(treeyey.root)
// console.log("   ");
// console.log("   ");
// treeyey.postOrder(treeyey.root)
// console.log("min of tree :",treeyey.min(treeyey.root))
// console.log("max no of the tree :",treeyey.max(treeyey.root));
// treeyey.delete(6)
// treeyey.inOrder(treeyey.root)
// console.log(treeyey.isBst(treeyey.root,0));