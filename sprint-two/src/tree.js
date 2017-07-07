var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // pushing value as new child into children arr
  this.children.push(new Tree(value)); 
};

treeMethods.contains = function(target) {
 var childArr = this.children;
 var result = false;
 
 if (this.value === target) {
  result = true;
 }
 
 childArr.forEach(function(childObj) {
  if (childObj.contains(target)) {
    result = true;
  }
 });
 
  return result;
  
};
  

// /*
//  * Complexity: What is the time complexity of the above functions?
// addChild: constant
// contains: linear
//  */

