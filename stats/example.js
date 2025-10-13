// interface Typ{get():string | number}
var Gen = /** @class */ (function () {
    function Gen(collection) {
        this.collection = collection;
    }
    Gen.prototype.get = function (index) {
        return this.collection[index];
    };
    return Gen;
}());
var str = new Gen(["a", "b", "c"]);
console.log(str.get(2));
function printAnything(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var char = arr_1[_i];
        console.log(char);
    }
}
printAnything(['a', 'b', 'c']);
