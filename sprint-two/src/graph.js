

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  var fromNode = this.nodes[fromNode];
  
  for (var i = 0; i < fromNode.length; i++) {
    if (fromNode[i] === toNode) {
      if (!this.nodes.hasOwnProperty(toNode)) {
        fromNode.splice(i, 1);
        result = false;
      } else {
        result = true;
      }
    } 
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNode = this.nodes[fromNode];
  var toNode = this.nodes[toNode];
  
  for (var i = 0; i < fromNode.length; i++) {
    if (fromNode[i] === toNode) {
      fromNode.splice(i, 1);
    }
  }
  
  for (var i = 0; i < toNode.length; i++) {
    if (toNode[i] === fromNode) {
      toNode.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addNode = constant
 .removeNode = constant
 .contains = linear/constant
 .hasEdge = linear/constant
 .removeEdge = linear
 .forEachNode = linear
 */

