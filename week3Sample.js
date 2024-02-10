class Node{
    constructor(){
        this.children={}
        this.endNode=false
    }
}
class trei{
    constructor()
    {
        this.root=new Node()
    }
    insert(word)
    {
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.endNode=true

    }
    search(word)
    {
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                return false
            }
            node=node.children[char]
        }
        return node.endNode

    }
    prefix(word)
    {
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                return false
            }
            node=node.children[char]
        }
        return true

    }
    display() {
        const words = [];
    
        const displayHelper = (node, currentWord) => {
            if (node.endNode) {
                words.push(currentWord); 
            }
            
            for (let char in node.children) {
                displayHelper(node.children[char], currentWord + char);
            }
        };
        
        displayHelper(this.root, '');
    
        console.log(words);
      }
}

const treis=new trei()
treis.insert("Rashi")
console.log(treis.search("Rashi"))
console.log(treis.prefix("Ras"))
treis.display()
