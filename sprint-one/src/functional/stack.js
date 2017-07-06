var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value; 
  };

  someInstance.pop = function() {
    var lastItem = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return lastItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

