//collection of nodes (vertices) that point to other nodes (connecting line->edges)
//path = sequence of paths

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

console.log(graph.print());
console.log(graph.getNode("Pugsly"));
