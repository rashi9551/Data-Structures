// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.next=null
// //     }
// // }


// // class LinkedList{
// //     constructor(){
// //         this.head=null
// //         this.size=0
// //     }
// //     isEmpty(){
// //         return this.size==0
// //     }
// //     getSize(){
// //         return this.size
// //     }
//     // prepend(value){
//     //     const node=new Node(value)
//     //     if(this.isEmpty()){
//     //         this.head=node
//     //     }
//     //     else{
//     //         node.next=this.head
//     //         this.head=node
//     //     }
//     //     this.size++
        
//     // }

// //     append(value){
// //         const node=new Node(value)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }
// //         else{
// //             let prev=this.head
// //             while(prev.next){
// //                 prev=prev.next
// //             }
// //             prev.next=node
            
// //         }
// //         this.size++
// //     }

// //     insert(value,index){
// //         if(index<0 && index>=this.size){
// //             return 
// //         }
// //         if(index==0){
// //             this.prepend(value)
// //         }
// //         else{
// //             const node=new Node(value)
// //             let prev=this.head
// //             for(let i=0;i<index-1;i++)
// //             {
// //                 prev=prev.next
// //             }
// //             node.next=prev.next
// //             prev.next=node
// //             this.size++
// //         }
// //     }
// //     print(){
// //         if(this.isEmpty()){
// //             console.log("the list is empty");
// //         }
// //         else{
// //             let curr=this.head
// //             let LinkedList=""
// //             while(curr){
// //                 LinkedList+=` ${curr.value}`
// //                 curr=curr.next
// //             }
// //             console.log(LinkedList );
// //         }
// //     }
// // }

// // const List=new LinkedList()
// // List.append(11)
// // List.print()
// // List.append(12)
// // List.append(13)
// // List.append(14)
// // List.prepend(15)
// // List.prepend(16)
// // List.insert(17,0)

// // List.print()


// // console.log(List.isEmpty());
// // console.log(List.getSize());


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linked{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize()
    {
        return this.size
    }
    prepend(value){
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
    print(){
        let val=this.head
        let res=""
        while(val){
            res+=`${val.value}`
            val=val.next
        }
        console.log(res);
    }
    append(value){
        const node=new Node(value)
        if(this.size===0){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next

            }
            prev.next=node
        }
        this.size++
    }
    insert(value,index){
        if(index<0&&index>this.size){
            console.log("ivalid input");
        }
        if(index==0){
            this.prepend(value)
        }
        else{
            const node=new Node(value)
            let prev =this.head
            for(i=0;i<index-1;i++)
            {
                prev=prev.next
            }
            prev.next=node
            
        }
        this.size++

    }
    remove(index){
        if(index<0&&index>this.size){
            console.log("invalid index");
        }
        if(index==0){
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next

            }
            let rmv=prev.next
            prev.next=rmv.next
        }
        this.size--
    }
    removeValue(value){ 
        let prev=this.head

        
        if(this.isEmpty()){
            return console.log("empty value");
        }
        if(this.head.value===value)
        {
            this.head=this.head.next
            this.size--
            return
        }
        else{
            while(prev.next&&prev.next.value!=value){
                prev=prev.next
            }
            
            if(prev.next){
                let remove=prev.next
                prev.next=remove.next
                this.size--
            }
            else{
                console.log("no node");
            }

            
            
        }
    }
    insertBefore(value,target){
        if(this.head.value===target){
            this.prepend(value)
        }
        else{
            let curr=this.head
            while(curr.next!=null&&curr.next.value!=target){
                curr=curr.next
            }
            if(curr.next!==null){
                const node=new Node(value)
                node.next=curr.next
                curr.next=node
            }
        }
    }
    insertAfter(value,target){
        if(this.head.value===target){
            this.append(value)
        }
        else{
            let curr=this.head
            while(curr!=null&&curr.value!=target){
                curr=curr.next
            }
            if(curr){
                const node=new Node(value)
                node.next=curr.next
                curr.next=node
            }
        }
    }
    findMiddle(){
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    search(value){
        let curr=this.head
        let i=1
        while(curr){
            if(curr.value==value){
                return i
            }
            curr=curr.next
            i++
        }
    }
    
}

const list=new linked()
list.prepend(4)
list.prepend(5)
list.prepend(6)
list.prepend(7)
list.prepend(8)
list.append(9)
list.insert(3,0)
list.insert(2,0)
// list.remove(1)
// list.removeValue(2)
list.removeValue(9)
list.removeValue(3)
list.insertBefore(5,6)
list.insertAfter(5,6)



list.reverse()
console.log(list.search(2));
list.print()

console.log(list.isEmpty());
console.log(list.findMiddle());
console.log(list.getSize());            
                                            



