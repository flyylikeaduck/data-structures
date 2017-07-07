

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  var tuple = [];

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  } 
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    } 
  }
  
  tuple.push(k);
  tuple.push(v);
  bucket.push(tuple); 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  var result;
  
  bucket.forEach(function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });
  
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      delete bucket[i];
    }
  }
};

//

// var hashTable = new HashTable()
// hashTable.insert('Steven', 'Seagal')

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*;
expect(hashTable.retrieve('Steven')).to.equal('Seagal');
*/