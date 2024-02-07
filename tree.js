
class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
  }
  class tree {
    constructor()
    {
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
        }
        else{
            if(!root.right)
            {
                root.right=node
            }else{
                return this.insertHelper(root.right,node)
            }
        }
    }
    delete(target)
    {
        this.root=this.deleteHelper(this.root,target)
    }
    bfs(){
        let queue=[]
        queue.push(this.root)
        while(queue.length)
        {
            
            let current=queue.shift()
            console.log(current.value);
  
            if(current.left)
            {
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            this.min(root.left)
        }
    }
    deleteHelper(root,target)
    {
        if(!root)
        {
            return root
        }
        if(target<root.value)
        {
            root.left=this.deleteHelper(root.left,target)
        }
        else if(target>root.value)
        {
            root.right=this.deleteHelper(root.right,target)
        }
        else{
            if(!root.left  && !root.right)
            {
                return null
            }
            if(!root.left)
            {
                return root.right
            }
            if(!root.right)
            {
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteHelper(root.right,root.value)
        }
        return root
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
  
    findPath(target)
    {
        let path=[]
        let cur=this.root
        while(cur){
            path.push(cur.value)
            if(target==cur.value)
            {
                path.pop()
                return path
            }
            if(target<cur.value)
            {
                cur=cur.left
            }
            else{
                cur=cur.right
            }
            
        }
    }
  
    ancestor(node1,node2){
        let path1=this.findPath(node1)
        let path2=this.findPath(node2)
        if(!path1 || !path2){
            return null
        }
        let common=0
        for(let i=0;i<path1.length;i++)
        {
            if(path1[i]==path2[i])
            {
                common=path1[i]
            }else{
                break;
            }
        }
        return common
    }
  
    closest(root,value)
    {
        let closest=root.value
        while(root){
            if(Math.abs(root.value-value)<Math.abs(closest-value))
            {
                closest=root.value
            }
            else if(value<root.value){
                root=root.left
            }else{
                root=root.right
            }
        }
        return closest
    }
    height(root) {
        if (root == null) {
            return 0
        }
        let left = this.height(root.left)
        let right = this.height(root.right)
        return Math.max(left, right) + 1
    }
  }
  
  
  
  
  const t=new tree()
  
  t.insert(8)
  t.insert(5)
  t.insert(10)
  t.insert(4)
  t.insert(6)
  t.insert(9)
  t.insert(14)
  // t.insert(8.5)
  // t.delete(10)
  console.log(t.findPath(14));
  t.inOrder(t.root)
  console.log("ancestor",t.ancestor(8.5,14));
  console.log(t.closest(t.root,5));
  console.log(t.height(t.root));
  console.log(" ");
  t.bfs()
  