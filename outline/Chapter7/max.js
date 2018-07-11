var arr = [1, 4, 7, 10, 25, 85, 1026, 3, 40]

Array.max = function(arr){
    return Math.max.apply(Math, arr);
}

Array.min = function(arr){
    return Math.min.apply(Math, arr);
}

Array.avg = function(arr){
    arr.sort(function(a, b){
        return a - b;
    });
    
    return eval(arr.join("+"))/arr.length;
}

Array.prototype.max = function(){
    return Math.max.apply(null, this);
}

Array.prototype.min = function(){
    return Math.min.apply(null, this);
}

