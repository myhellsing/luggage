module.exports.utils = {
    curry: function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
          var a = Array.prototype.merge(args, arguments);
          return fn.apply(this, a);
        }
    }
}