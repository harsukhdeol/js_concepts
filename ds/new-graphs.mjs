//collection of nodes (vertices) that point to other nodes (connecting line->edges)
//path = sequence of paths
import createQueue from "./queue.mjs";

function createNode(key) {
  const neighbours = []; //array of nodes
  return {
    key,
    neighbours,
    addNeighbour(node) {
      neighbours.push(node);
    },
  };
}

function createGraph(directed = false) {
  //can be uni/bi directional
  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find((node) => node.key === key);
    },
    addEdge(key1, key2) {
      const node1 = this.getNode(key1);
      const node2 = this.getNode(key2);

      node1.addNeighbour(node2);
      edges.push(`${node1}-${node2}`);

      if (!directed) {
        node2.addNeighbour(node1);
      }
    },
    print() {
      return nodes
        .map(({ key, neighbours }) => {
          let result = key;

          if (neighbours.length) {
            result += `=> ${neighbours
              .map((neighbour) => neighbour.key)
              .join(" ")}`;
          }
          return result;
        })
        .join("\n");
    },
    BFS(startingKey, visitFxn) {
      const startingNode = this.getNode(startingKey);
      const visited = nodes.reduce((acc, node) => {
        //create object with node keys as keys and false as default value
        //will be true when visited
        acc[node.key] = false;
        return acc;
      }, {});
      const queue = createQueue();

      queue.enqueue(startingNode);
      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        if (!visited[currentNode.key]) {
          visitFxn(currentNode); //do whatever checking you need to do
          visited[currentNode.key] = true;
        }

        currentNode.neighbours.forEach((node) => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },
    DFS(startingKey, visitFxn) {
      const startingNode = this.getNode(startingKey);

      const visited = nodes.reduce((arr, node) => {
        arr[node.key] = false;
        return arr;
      }, {});
      console.log(visited);
      function explore(node) {
        if (visited[node.key]) {
          return;
        }
        visitFxn(node);
        visited[node.key] = true;

        node.neighbours.forEach((node) => {
          explore(node);
        });
      }
      explore(startingNode);
    },
  };
}

const graph = createGraph();

graph.addNode("Gomez");
graph.addNode("Morticia");
graph.addNode("Wednesday");
graph.addNode("Pugsly");

graph.addEdge("Gomez", "Morticia");
graph.addEdge("Morticia", "Gomez");
graph.addEdge("Morticia", "Wednesday");
graph.addEdge("Morticia", "Pugsly");
graph.addEdge("Gomez", "Pugsly");
graph.addEdge("Gomez", "Wednesday");

/* graph.BFS("Gomez", (node) => {
  console.log(node.key);
}); */

graph.DFS("Gomez", (node) => {
  console.log(node.key);
});
