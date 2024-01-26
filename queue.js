// queue with array 

class Queue {
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }
    print(){
        console.log(this.items.toString());
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length==0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
    }
    size(){
        console.log(this.items.length)
    }
}

const queues=new Queue()

queues.enqueue(12)
queues.enqueue(14)
queues.enqueue(13)
queues.enqueue(17)
queues.enqueue(11)
queues.dequeue()
console.log(queues.isEmpty());
queues.print()
console.log(queues.peek());


// queue with list  

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class queue{
    constructor(){
        this.front=null
        this.rear=null
    }

    enque(value){
        const node=new Node(value)
        if(this.front===null){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    deque(){
        if(this.rear===this.front){
            this.rear=null
            this.front=null
        }else{
            let val=this.front
            this.front=this.front.next
            return val 
          
        }
        
    }
    peek(){
        console.log(this.front.value);
    }

}

const Queue=new queue()
Queue.enque(1)
Queue.enque(2)
Queue.enque(4)
Queue.enque(5)
Queue.enque(6)
Queue.enque(7)
Queue.enque(8)
console.log(Queue.deque());
Queue.peek()

// queue with object  


class Queue{
    constructor(){
        this.item={}
        this.front=0
        this.rear=0
    }

    enqueue(value)
    {
        this.item[this.rear]=value
        this.rear++
    }
    dequeue()
    {
        let val=this.item[this.front]
        delete this.item[this.front]
        console.log(val);
        this.front++
    }
    peek(){
        console.log(this.item[this.front]);
    }
    isEmpty(){
        console.log(this.front-this.rear==0);
    }
    getSize(){
        console.log(this.rear-this.front);
    }
    print()
    {
        console.log(this.item);
    }
}

const queuey=new Queue()

queuey.enqueue(5)
queuey.enqueue(4)
queuey.enqueue(3)
queuey.enqueue(2)
queuey.enqueue(1)
queuey.peek()
queuey.dequeue()
queuey.peek()
queuey.print()




class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}

class queue{
    constructor()
    {
        this.front=null
        this.rear=null

    }
    enqueue(value){
        const node=new Node(value)
        if(this.front==null)
        {
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    dequeue()
    {
        this.front=this.front.next
    }
    peek(){
        console.log(this.front.value);
    }
    print()
    {
        let curr=this.front
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }
}

const Queue=new queue()

Queue.enqueue(6)
Queue.enqueue(5)
Queue.enqueue(4)
Queue.enqueue(3)
Queue.enqueue(2)
Queue.enqueue(1)
Queue.dequeue()
Queue.peek()
Queue.print()




