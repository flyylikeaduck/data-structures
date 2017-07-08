var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  
};

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
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  } 
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // callback on first tree
  callback(this.value);
  // recurse through each left 
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 
  
  // recurse through each right
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 
.insert: logarithmic 
.contains: logarithmic
.depthFirstLog: linear
 
 // USE CASE:
 */
