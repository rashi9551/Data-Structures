class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}

class tree{
    constructor()
    {
        this.root=null
    }
    isEmpty(){
        
        return this.root===null
    }
    insert(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.root=node
            return
        }else{
            this.insertOperation(this.root,node)
        }
    }
    insertOperation(root,node)
    {
        if(root.value>node.value){
            if(root.left===null)
            {
                root=node
                return
            }
            else{
                this.insertOperation(root.left,node)
            }
        }else{
            if(root.right===null)
            {
                root.right=node
                return
            }else{
                this.insertOperation(root.right,node)
            }
        }
    }
    search(root,target)
    {
        if(!root)
        {
            return false
        }
        if(target<root.value)
        {
            if(root.left===target)
            {
                return true
            }
            else{
                this.search(root.left,target)
            }
        }else{
            if(root.right===target)
            {
                return true
            }else{
                this.search(root.right,target)
            }
        }
    }
}

const treeyey=new tree()
treeyey.insert(16)
treeyey.insert(18)
treeyey.insert(14)
treeyey.insert(15)
console.log(treeyey.isEmpty());