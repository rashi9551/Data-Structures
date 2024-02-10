

class trieNode{
    constructor()
    {
        this.children={}
        this.endNode=false
    }

}
class trie{
    constructor()
    {
        this.root=new trieNode()
    }
    insert(word){
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                node.children[char]=new trieNode()
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
                return
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

const t=new trie()

t.insert("sarath")
console.log(t.search("sarath"));
console.log(t.prefix('sara'))