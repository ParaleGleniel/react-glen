   response.delayedForEach(function(value){
          // console.log(value)
          // Download CSV file
          downloadCSV(value, filename);
        }, 500)




 Array.prototype.delayedForEach = function(callback, timeout, thisArg){
   var i = 0,
    l = this.length,
    self = this,
    caller = function(){
      callback.call(thisArg || self, self[i], i, self);
      (++i < l) && setTimeout(caller, timeout);
    };
  caller();
  };

