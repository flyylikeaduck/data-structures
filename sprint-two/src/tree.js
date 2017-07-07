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
 
  
  childArr.forEach(function(childObj) {
    if (childObj.length === 0) {
      if (childObj.value === target) {
        result = true;
      }
      return false;
    //base case
    } else {
      //if (result === false) {
      if (childObj.value === target) {
        result = true;
      } else {
        return childObj.contains(target);
      }
    }
  });
  //});
  
  return result;
  
    
  // childArr.forEach(function(childObj) {
  //   while (childObj.length > 0) {
  //     if (childObj.value === target) {
  //       return true;
  //     } else {
  //       childObj.contains(target);
  //     } 
  //   }
  //   if (childObj.value === target) {
  //     return true;
  //   }
  //   return false;
  // });
};

// /*

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

// {[{value: 5, children: [{value: 6}, {value: 7}, {}]}]}

// var tree = new Tree();

// tree.addChild(5);

// tree.children[0].addChild(6);
// tree.children[0].addChild(7);
// expect(tree.children[0].children[0].value).to.equal(6);
// expect(tree.children[0].children[1].value).to.equal(7);


// var tree = new Tree();

// {[{value: 5, children:[ {value: 7, children: null}]}, {value: 6, children: [{value: 8, children: null}] } ]}

// tree.addChild(5);
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[1].addChild(8);
// expect(tree.contains(7)).to.equal(true);
// expect(tree.contains(8)).to.equal(true);*/