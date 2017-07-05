// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var firstItem = storage[Object.keys(storage)[0]];

    delete storage[Object.keys(storage)[0]];
    for (var key in storage) {
      storage[key - 1] = storage[key];
      delete storage[key];
    }
    return firstItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
