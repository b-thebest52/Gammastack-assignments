function intersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    output = [];
    
    for(let element of setA){
	    if(setB.has(element)){
		    output.push(element);
	    }
    }
    return output;
}

arr1 = [2, 1, 1];
arr2 = [2, 3, 1];

console.log(intersect(arr1, arr2));
