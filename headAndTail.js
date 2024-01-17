class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        if(this.size===0)return console.log("link list is empty");
    }
    getSize(){
        console.log(this.size);
    }
    prepend(value){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
            this.tail=node
        }
        else{

            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        let curr=this.head
        let result=""
        while(curr){
            result+=`${curr.value}`
            curr=curr.next
        }
        console.log(result);
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    removeFront(){
        if(this.head==this.tail){
            this.head=null
            this.tail=null
        }
        else{
            let next=this.head.next
            this.head=next
        }
        this.size--

    }
    removrEnd(){
        if(this.head==this.tail){
            this.head=null
            this.tail=null
             
        }
        else{
            let prev=this.head
            while(prev&&prev.next!=this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }
        this.size--
    }
}


const list=new LinkedList()


list.prepend(9)
list.prepend(8)
list.prepend(7)
list.prepend(6)
list.prepend(5)
list.prepend(4)
list.prepend(3)
list.prepend(2)
list.prepend(1)
list.append(10)
list.removeFront()
list.removrEnd()
list.print()
list.getSize()