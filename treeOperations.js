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
            }
            else{
                return this.insertHelper(root.left,node)
            }
        }
        else{
            if(!root.right)
            {
                root.right=node
            }
            else{
                return this.insertHelper(root.right,node)
            }
        }
    }
    delete(target){
        this.root=this.deleteHelper(this.root,target)
    }
    deleteHelper(root,target)
    {
        if(!root)
        {
            return root
        }
        if(target<root.value)
        {
            return this.deleteHelper(root.left,target)
        }else if(target>root.value)
        {
            return this.deleteHelper(root.right,target)
        }else{
            if(!root.left && !root.right)
            {
                return  null
            }
            if(!root.left)
            {
                return root.right
            }
            if(!root.right)
            {
                return root.left
            }else{
                root.value=this.min(root.right)
                root.right=this.deleteHelper(root.right,root.value)
            }
        }
        return root
    }
    isBst(root)
    {
        if(root===null)return true
        let min=root.left
        let max=root.right

        if((min!=null && root.value<=min.value) || (max!= null &&root.value>max.value))
        {
            return false
        }
        return this.isBst(root.left)&&this.isBst(root.right)
    }
    height(root)
    {
        if(root===null)return 0

        let left=this.height(root.left)
        let right=this.height(root.right)
        return Math.max(left,right)+1
    }
    closest(root,target)
    {
        let closest=root.value
        while(root!=null)
        {
            if(Math.abs(root.value-target)<Math.abs(target-closest)){
                closest=root.value
            }
            else if(target<root.value)
            {
                root=root.left
            }
            else {
                root=root.right
            }
            
        }
        return closest


    }
    findPath(root,value)
    {
        let path=[]
        let curr=root
        while(curr!=null)
        {
            path.push(curr.value)
            if(curr.value===value)
            {
                path.pop()
                return path
            }
            if(value<curr.value){
                curr=curr.left

            }else{
                curr=curr.right
            }

        }
        return null
    }

    max(root)
    {
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }
    min(root)
    {
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
    preOrder(root)
    {
        if(root)
        {
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
    postOrder(root)
    {
        if(root)
        {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    searchOperation(root,target)
    {
        if(!root)
        {
            return false
        }
        else{
            if(root.value===target){
                return true
            }
            else if(target<root.value)
            {
                return this.searchOperation(root.left,target)
            }
            else
            {
                return this.searchOperation(root.right,target)
            }
        }
    }
    ancestor(node1,node2)
    {
        let path1=this.findPath(this.root,node1)
        let path2=this.findPath(this.root,node2)
        console.log(path1,path2);
        let common=0
        for(let i=0;i<Math.min(path1.length,path2.length);i++)
        {
            if(path1[i]===path2[i])
            {
                common=path1[i]
            }else{
                break;
            }
        }
        return common
    }
}

const t=new tree()

t.insert(8)
t.insert(7)
t.insert(3)
t.insert(9)
t.insert(2)
t.preOrder(t.root)
console.log(" ");
t.inOrder(t.root)
console.log(" ");
t.postOrder(t.root)
console.log("max :",t.max(t.root));
console.log("min :",t.min(t.root));
console.log(t.isBst(t.root));
console.log(t.height(t.root));
// t.delete(8)
console.log(t.searchOperation(t.root,6));
console.log(t.closest(t.root,4));
console.log(t.findPath(t.root,2));
console.log(t.ancestor(3,7));

