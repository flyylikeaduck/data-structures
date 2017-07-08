var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  
};

var binarySearchTree = new BinarySearchTree();

BinarySearchTree.prototype.insert = function(value) {

  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  
};

BinarySearchTree.prototype.contains = function(value) {
  // compare this.value to value, if it matches, return true
   //if value < this.value, recurse on this.left
    //if value > this.value, recurse on this.right
  //return false
  
  if (this.value === value) {
    return true;
  }
  
  if (value < this.value) {
    this.left.contains(value);
  }
  
  if (value > this.value) {
    this.right.contains(value);
  }
  
  return false;
   
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 
 
 // USE CASE:
 */
