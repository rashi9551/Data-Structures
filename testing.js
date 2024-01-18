class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LinkedList{
    constructor()
    {
        this.head=null
        this.tail=null
        this.size==0
    }

    isEmpty(){
        return this.size===0
    }
    prepend(value)
    {
        const node=new Node(value)
        if(this.size===0){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
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
    isplaindrome(){
        if(!this.head||!this.head.next){
            console.log("illla");
            return 
        }

        let prev=null
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next)
        {
            fast=fast.next.next
            let next=slow.next
            slow.next=prev
            prev=slow
            slow=next
        }
        if(fast){
            slow=slow.next
        }

        while(slow){
            if(slow.val!=prev.val){
                console.log("its not palindrome");
                return
            }
            slow=slow.next
            prev=prev.next

        }
        console.log("its palinderome");
    }
    arrayToLinked(arr)
    {
        this.head=new Node(arr[0])
        let curr=this.head
        let i=1
        while(i<arr.length)
        {
            curr.next=new Node(arr[i])
            curr=curr.next
            i++

        }
    }
    deleteMidlle(){
        let slow=this.head
        let fast=this.head
        let prev=null

        while(fast&&fast.next)
        {
            fast=fast.next.next
            prev=slow
            slow=slow.next
        }
        prev.next=slow.next
        console.log(prev.val,slow.val);
    }





    midlley(){
        let slow=this.head
        let fast=this.head
        let prev=null

        while(fast&&fast.next){
            fast=fast.next.next
            prev=slow
            slow=slow.next

        }
        prev.next=slow.next
    }
    
}
const list=new LinkedList()

// list.prepend(4)
// list.prepend(3)
// list.prepend(6)
// list.prepend(6)
// list.prepend(3)
// list.prepend(4)
let arr=[1,2,3,4,5,7]
list.arrayToLinked(arr)
// list.deleteMidlle()
list.midlley()
list.print()
// list.isplaindrome()
