class graph{
    constructor()
    {
        this.adjacencyList={}
    }

    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])
        {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2])
        {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
       this.adjacencyList[vertex1].delete(vertex2)
       this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex)
    {
        if(!this.adjacencyList[vertex]){
            return null
        }
        for(let key of this.adjacencyList[vertex])
        {
            this.removeEdge(vertex,key)
        }

        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1,vertex2)
    {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    display(){
        for(let key in this.adjacencyList)
        {
            console.log(key +"->" + [...this.adjacencyList[key]]);
        }
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];

        while (queue.length > 0) {
            const currentVertex = queue.shift();

            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex);

                for (const neighbor of this.adjacencyList[currentVertex]) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }

    dfs(startVertex) {
        const visited = new Set();
    
        const dfsHelper = (vertex) => {
            console.log(vertex);
            visited.add(vertex);
    
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };
    
        dfsHelper(startVertex);
    }
}

const G=new graph()
G.addEdge('A','B')
G.addEdge('B','C')
G.addEdge('B','D')
G.addEdge('E','C')
G.addEdge('D','C')
// G.removeEdge("A","B")
console.log(G.hasEdge("B","C"));
G.display()
// G.bfs("A")
G.dfs("A")