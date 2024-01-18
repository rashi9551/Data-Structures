class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }

}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return  this.size===0
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.head=node
            this.tail=node
        }
        else{
            this.head.prev=node
            node.next=this.head
            this.head=node

        }
        this.size++
    }
    append(value)
    {
        const node=new Node(value)
        if(this.isEmpty())
        {
            this.head=node
            this.tail=node
        }
        else
        {
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }
    removeFront(){
        if(this.isEmpty()){
            return console.log("is empty");
        }else{
            this.head=this.head.next
        }
        this.size--
    }
    removeEnd(){
        if(this.isEmpty()){
            return console.log("is empty");
        }
        if(this.size===1){
            this.head=null
            this.tail=null
            
        }
        else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
        this.size--
    }
    removeBefore(value){
        let prev=null
        let curr=this.head
        if(this.isEmpty()){
            return console.log("is empty");
        }
        if(this.head.next.val==value){
            this.removeFront()
            return
        }
        if(this.size===1){
            this.head=null
            this.tail=null
            
        }
        while(curr&&curr.next.val!=value){
            prev=curr
            curr=curr.next
        }
        prev.next=curr.next
        curr.next.prev=prev
        this.size--
        

    }
    print()
    {
        let curr=this.head
        if(this.isEmpty()){
            return console.log("its empty");
        }
        else{
            while(curr)
            {
                console.log(curr.val);
                curr=curr.next
            }
        }
    }
    insertBefore(value,target){
        const node=new Node(value)
        if(this.isEmpty()){
            return console.log("its empty");
        }
        if(this.size===1||this.head.val==target){
            this.prepend(value)
            
        }
        
        
        else{
            let curr=this.head
            while(curr&&curr.next.val!=target){
                curr=curr.next
            }
            

            let next=curr.next
            curr.next=node
            next.prev=node
            node.next=next
        }
        this.size++
    }
    middle(){
        if(this.isEmpty()){
            return console.log("its empty");
        }
        
        let slow=this.head
        let fast=this.head

        while(fast&&fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        }
        console.log("middley",slow.val);
    }
    middleDelete(){
        if(this.isEmpty()){
            return console.log("its empty");
        }
        let slow=this.head
        let fast=this.head

        while(fast&&fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        }
        let prev=slow.prev
        prev.next=slow.next
        slow.next.prev=prev

    }
}
const list=new LinkedList()

list.prepend(1)
list.prepend(5)
list.append(9)
list.append(3)
// list.append(2)
list.append(7)
list.removeBefore(1)
list.insertBefore(11,1)
list.middle()
list.middleDelete()
// list.removeFront()
// list.removeEnd()


list.print()
