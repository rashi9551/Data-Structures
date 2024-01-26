// stack with array 

class stack{
    constructor()
    {
        this.stack1=[]
        this.stack2=[]

    }

    push(value)
    {
        this.stack1.push(value)
1
    }
    pop()
    {
        this.stack1.pop()
    }
    print()
    {
        console.log("stack:",this.stack1,"queue:",this.queue);
    }
    enqueue(){
        while(this.stack1.length<0){
        this.stack2.push(this.stack1.pop())
        }
    }
    dequeue(){
        this.stack2.pop()   
    }


}
const stacks=new stack()

stacks.push(8)
stacks.push(7)
stacks.push(6)
stacks.push(5)
stacks.push(4)
// stacks.pop()
stacks.print()
stacks.enqueue()
stacks.print()
stacks.dequeue()
stacks.print()


// stack with LinkedList



// class Node{
//     constructor(value)
//     {
//         this.value=value
//         this.next=null
//     }
// }

// class Stack{
//     constructor()
//     {
//         this.top=null

//     }
//     push(value)
//     {
//         const node=new Node(value)
//         node.next=this.top
//         this.top=node
//     }
//     pop(){
//         let top=this.top
//         this.top.next=this.top
//         return top
//     }
//     peek(){
//         console.log(this.top);
//     }

// }

// const stack=new Stack()
// stack.push(8)
// stack.push(7)
// stack.push(6)
// stack.push(5)
// stack.push(4)
// stack.push(2)
// console.log(stack.pop());


// class Node{
//     constructor(value)
//     {
//         this.value=value
//         this.next=null
//     }

// }

// class stack{
//     constructor(){
//         this.top=null
//     }

//     push(value)
//     {
//         const node=new Node(value)
//         if(this.top==null)
//         {
//             this.top=node
//         }else{
//             node.next=this.top
//             this.top=node
//         }
//     }
//     pop(){
//         this.top=this.top.next
//     }
//     peek()
//     {
//         console.log(this.top.value);
//     }
    
    
// }

// const stackey=new stack()

// stackey.push(6)
// stackey.push(5)
// stackey.push(4)
// stackey.push(3)
// stackey.push(2)
// stackey.peek()
// stackey.pop()
// stackey.peek()

