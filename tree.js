// class Node{
//     constructor(value)
//     {
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class tree{
//     constructor()
//     {
//         this.root=null
//     }
//     isEmpty(){
        
//         return this.root===null
//     }
//     insert(value)
//     {
//         const node=new Node(value)
//         if(this.isEmpty())
//         {
//             this.root=node
//             return
//         }else{
//             this.insertOperation(this.root,node)
//         }
//     }
//     insertOperation(root,node)
//     {
//         if(root.value>node.value){
//             if(root.left===null)
//             {
//                 root.left=node
//                 return
//             }
//             else{
//                 this.insertOperation(root.left,node)
//             }
//         }else{
//             if(root.right===null)
//             {
//                 root.right=node
//                 return
//             }else{
//                 this.insertOperation(root.right,node)
//             }
//         }
//     }
//     searchnode(target){
        
//         return this.search(this.root,target)

//     }
//     search(root,target)
//     {
//         if(!root)
//         {
//             return false
//         }
//         else{ 
//             if(root.value===target)
//             {
//             return true
//             }
//             else if(target<root.value)
//             {
//             return this.search(root.left,target)    
//             }
//             else{
//             return this.search(root.right,target)
//             }
//         }
//     }
// }

// const treeyey=new tree()
// treeyey.insert(16)
// treeyey.insert(18)
// treeyey.insert(14)
// treeyey.insert(15)
// treeyey.insert(19)
// treeyey.insert(20)
// // console.log(treeyey.isEmpty());
// console.log(treeyey.searchnode(20))


class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }

}

class tree{
    constructor(){
        this.root=null
    }
    insert(value)
    {
        const node=new Node(value)
        if(!this.root)
        {
            this.root=node
        }
        else{
            this.insertOperation(this.root,node)
        }
    }
    insertOperation(root,node)
    {
        if(node.value<root.value)
        {
            if(root.left==null)
            {
                console.log("nadnuu leftil");
                root.left=node
            }
            else{
                return this.insertOperation(root.left,node)
            }
        }else{
            if(root.right==null)
            {
                console.log("nadnuu rigtil");
                root.right=node
            }
            else{
                return this.insertOperation(root.right,node)
            }
        }
    }

    search(target)
    {
        return this.searchOperation(this.root,target)
    }

    searchOperation(root,target)
    {
        if(!root)
        {
            return false
        }else{
            if(root.value===target)
            {
                return true
            }else if(target<root.value)
            {
                return this.searchOperation(root.left,target)
            }
            else{
                return this.searchOperation(root.right,target)
            }
        }
    }
}

const treeyey=new tree()
treeyey.insert(4)
treeyey.insert(3)
treeyey.insert(6)
treeyey.insert(5)
treeyey.insert(2)
treeyey.insert(1)
treeyey.insert(7)
treeyey.insert(8)
treeyey.insert(9)
console.log(treeyey.search(14));