//graphe orienté ou non orienté
const nodes = ['A', 'B', 'C', 'D', 'E'];
const edges = {
  'A': ['B', 'C'],
  'B': ['A', 'C', 'D', 'E'],
  'C': ['A', 'B', 'D'],
  'D': ['B', 'C', 'E'],
  'E': ['B', 'D']
};

//Rercheche de tout les noeuds adjacents 
function findAdjacentNodes(node, edges) {
    return edges[node];
}
console.log(findAdjacentNodes(nodes[0], edges));
console.log(findAdjacentNodes(nodes[2], edges));


//--------------------------------------
//Pour trouver tout les chemins entre deux noeuds, on utilise l'algo de parcours en profondeur 'DFS'
function findPathsDFS(startNode, endNode, edges, visited = new Set(), path = [], paths = []){
    if(startNode === endNode){
        paths.push([...path, endNode]);
        return paths;
    }
    visited.add(startNode);
    path.push(startNode);

    for(const adjacentNode of edges[startNode]){
        if(!visited.has(adjacentNode)){
            findPathsDFS(adjacentNode, endNode, edges, visited, path, paths);
        }
    }

    visited.delete(startNode);
    path.pop();

    return paths; 
}
console.log('---------------trouver tout les chemins entre deux noeuds-------------');
console.log(findPathsDFS('B', 'E', edges));

//parcourir tout les noeuds et aretes avec la méthode 'DFS'
function traverserGraphDFS(node, edges, visited = new Set()){
    console.log(node);
    visited.add(node);

    for(const adjacentNode of edges[node]){
        if(!visited.has(adjacentNode)){
            console.log(`${node} -> ${adjacentNode}`);
            traverserGraphDFS(adjacentNode, edges, visited);
        }
    }
}
console.log('------traverser tout les noeuds------');
traverserGraphDFS('A', edges);

//----------trouver le plus court chemin par l'algorithme de Dijkstra-----------
const edgesShort = {
    'A,B': 2,
    'A,C': 4,
    'B,C': 1,
    'B,D': 2,
    'B,E': 3,
    'C,D': 3,
    'D,E': 1
  };
function findShortestPath(startNode, endNode, edgesShort){
    const queue = new PriorityQueue();
    const distances = {};
    for(const node in edgesShort){
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    queue.enqueue(startNode, 0);

    const previousNodes = {};
    const visited = new Set();
    
    while(!queue.isEmpty()){
        const current = queue.dequeue();

        if(current === endNode){
            const path = [];
            let node = endNode;
            while(node != startNode){
                path.push(node);
                node = previousNodes[node];
            }
            path.push(startNode);
            path.reverse();
            return path;
        }
        visited.add(current);
        for(const neighbor of edgesShort[current]){
            if(!visited.has(neighbor)){
                const distance = distances[current] + edgesShort[`${current}, ${neighbor}`];
                if(distance < distances[neighbor]){
                    distances[neighbor] = distance;
                    previousNodes[neighbor] = current; 
                    queue.enqueue(neighbor, distance);
                }
            }
        }
    }
    return null; 
}
console.log('-----------le plus court chemin ----------------');
console.log(findShortestPath('A', 'D', edgesShort));
