class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

class list{
    constructor()
    {
        this.head=null
    }
    prepend(value)
    {
        const node=new Node(value)
        if(this.head==null)
        {
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        
    }
    append(value){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
        }
        else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
    }
    print(){
        if(this.head==null){
            console.log("list is empty");
        }
        let curr=this.head
        while(curr)
        {
            console.log(curr.val);
            curr=curr.next
        }
    }
    insert(value,target){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
        }
        if(this.head.val===target){
            this.prepend(value)
        }
        else{
            let curr=this.head
            while(curr&&curr.next.val!=target){

                curr=curr.next
            }
            if(curr.next){
                node.next=curr.next
                curr.next=node
            }
            

        }
    }
    insertafter(value,target){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
        }
        if(this.head.val===target){
            this.prepend(value)
        }
        else{
            let curr=this.head
            while(curr&&curr.val!=target){

                curr=curr.next
            }
            if(curr){
                node.next=curr.next
                curr.next=node
            }
            

        }
    }
    removeDup(){
        if(this.head==null){
            console.log("empty");
        }
        else{
            let set=new Set()
            let prev=null
            let curr=this.head
            while(curr){
                if(set.has(curr.val)){
                    prev.next=curr.next
                }else{
                    set.add(curr.val)
                    prev=curr
                }
                curr=curr.next
            }
        }
    }
    ispalindrome(){
        if(this.head===null||this.head.next==null){
            console.log("not");
        }
        else{
            let prev=null
            let slow=this.head
            let fast=this.head
            while(fast&&fast.next){
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
                if(slow.val!=prev.val)
                {
                    console.log("its not a pali");
                    return
                }
                prev=prev.next
                slow=slow.next
            }
            console.log("its palindrome");
        }
    }
}
const List=new list()

List.prepend(2)
List.prepend(2)
List.prepend(7)
List.prepend(2)
List.prepend(2)



// List.insert(4,7)
// List.insertafter(4,7)
// List.removeDup()
List.print()
List.ispalindrome()



