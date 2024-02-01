class trieNode{
    constructor()
    {
        this.children={}
        this.endNode=false
    }
}
class trie{
    constructor(word)
    {
        this.root=new trieNode()
        for(let i=0;i<word.length;i++)
        {
            this.insert(word.substring(i))
        }
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

    search(word){
        let node=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!node.children[char])
            {
                return false
            }node=node.children[char]
        }
        return node.endNode
    }

    prefix(word){
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
}

const t=new trie("rashi")
t.insert("ajmal")
console.log(t.search("ajmal"));
console.log(t.prefix("ra"));