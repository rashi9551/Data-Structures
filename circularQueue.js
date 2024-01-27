class circularQue{
    constructor(size){
        this.item=new Array(size)
        this.capacity=size
        this.length=0
        this.front=-1
        this.rear=-1
    }
    isFull()
    {
        return this.length==this.capacity
    }
    isEmpty(){
        return this.length===0
    }
    enqueue(value)
    {
        if(!this.isFull)
        {
            this.rear=(this.rear+1) % this.capacity
            this.item[this.rear]=value
            this.length++
            if(this.front==-1)
            {
                this.front=this.rear
            }
        }else{
            console.log("it was full");
        }
    }
    dequeue()
    {
        if(this.isEmpty()){
            return null
        }
        let items=this.item[this.front]
        this.item[this.front]=null
        this.front=(this.front+1) % this.capacity
        this.length--
        if(this.isEmpty())
        {
            this.front=-1
            this.rear=-1
        }
        console.log(items);
    }
    peek()
    {
        console.log(this.item[this.front]);
    }
    size()
    {
        console.log(this.length);
    }
    print(){
        console.log(this.item);
    }
}

const circley=new circularQue(4)

circley.enqueue(7)
circley.enqueue(6)
circley.enqueue(5)
circley.enqueue(3)
circley.dequeue()
circley.print()
circley.peek()
circley.size()