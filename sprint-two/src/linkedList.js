var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    
    list.tail = node;
    
  };

  list.removeHead = function() {
    var origHead = list.head.value;
    list.head = list.head.next;
    return origHead;
  };

  list.contains = function(target) {
    // loop through the nodes
    var currentNode = list.head;
    
    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (currentNode.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 // addToTail: constant
 // removeHead: constant
 // contains: linear
 */