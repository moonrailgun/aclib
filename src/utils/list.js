/**
 * Created by Chen on 2016-03-02.
 */

(function (ac, window) {
    var List = function(){
        Array.call(this);
    };

    List.prototype.add = function (node) {
        if(this.indexOf(node) < 0){
            this.push(node);
        }
        return this;
    };

    ac.List = List;
})(ac, window);