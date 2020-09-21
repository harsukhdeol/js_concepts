//Breath-first search through graph
// Given adjacency matrix

function bfs(graph, root) {
  //root = index to start search at
  let nodesLen = {};
  for (let i = 0; i < graph.length; i++) {
    nodeLen[i] = Infinity; //set all the length values to infinity bu default
  }

  nodesLen[root] = 0; // set length of root away from root to 0

  let queue = [root]; // create array with just root inside for now
  let current = root; //set variable to keep track of which node youre on

  while (queue.length != 0) {
    current = queue.shift(); //removes first element from array and stores it in current
    let curConnected = graph[current]; //get node info of current node
    let neighbourIdx = [];
    let idx = curConnected.indexOf(1); //find the idx of the first connected node
    while (idx) {
      //fills in neighbourIdx arr
      neighbourIdx.push(i);
      idx = curConnected.indexOf(1, idx + 1); //start at index+1 and search for 1
    }

    for (let j = 0; j < neighbourIdx.length; j++) {
      //loop through all neighboring nodes found
      if (nodesLen[neighbourIdx[j]] == Infinity) {
        nodesLen[neighbourIdx[j]] = nodesLen[current] + 1;
        queue.push(neighbourIdx[j]);
      }
    }
  }
  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];
console.log(bfs(exBFSGraph, 1));
