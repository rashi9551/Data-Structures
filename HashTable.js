// class hashey{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let res=0
//         for(let i=0;i<key.length;i++)
//         {
//             res+=key.charCodeAt(i)

//         }
//         return res % this.size
//     }
//     get(key)
//     {
//         let index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket)
//         {
//             let sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 console.log(sameKey[0],sameKey[1])
//             }
//         }else{
//             return undefined
//         }

//     }
//     set(key,value){
//         let index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket)
//         {
//             this.table[index]=[[key,value]]
//         }else{
//             const sameKey=bucket.find(item=>item[0]===key)
//             if(sameKey)
//             {
//                 sameKey[1]=value
//             }
//             else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     remove(key)
//     {
//         let index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             let samekey=bucket.find(item=>item[0]===key)
//             if(samekey){
//                 bucket.splice(bucket.indexOf(samekey),1)
//             }
//         }
//     }
//     print()
//     {
//         for(let i=0;i<this.table.length;i++)
//         {
//             if(this.table[i])
//             {
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const Hash=new hashey(50)
// Hash.set("name","shinadh")
// Hash.set("name","shinadhey")
// Hash.set("mane","hakeem")
// Hash.set("nabeel","sharath")
// Hash.print()
// Hash.get("mane")


class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size

    }
    hash(key)
    {
        let total=0
        for(let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total%this.size

    }

    set(key,val)
    {
        let index=this.hash(key)

        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,val]]
        }else{
            let samekey=bucket.find(item=>item[0]===key)
            if(samekey){
                samekey[1]=val
            }else{
                bucket.push([key,val])
            }
        }
    }
    get(key)
    {
        let index=this.hash(key)
        const  bucket=this.table[index]
        if(bucket)
        {
            let samekey=bucket.find(item=>item[0]===key)
            console.log(samekey);
        }else
        {
            return undefined
        }
        
    }
    remove(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket)
        {
            let sameKey=bucket.find(item=>item[0]==key)
            if(sameKey){
            bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){

                console.log(this.table[i]);
            }
        }
    }
}

const hashey=new HashTable(30)

hashey.set("suhail","hakeem")
hashey.set("suhail","raheem")
hashey.set("liahus","hakeem")
hashey.get("suhail")
hashey.remove("liahus")

hashey.display()
