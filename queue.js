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