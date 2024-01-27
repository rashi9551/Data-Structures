class questack{
    constructor(){
        this.q1=[]
        this.q2=[]

    }
    push(x){
        this.q1.push(x)
        while(this.q2.length>0)
        {
            this.q1.push(this.q2.shift())
        }

        [this.q1,this.q2]=[this.q2,this.q1]

    }

    pop(){
        this.q2.shift()
    }
    print(){
        console.log(this.q2);
    }
}

const qs=new questack()

qs.push(6)
qs.push(5)
qs.push(4)
qs.push(3)
qs.push(1)

qs.pop()
qs.print()

