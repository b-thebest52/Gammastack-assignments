function groupby(input){
    var output = {};
    var i;
    for (i = 0; i < input.length; i++) {
        obj = input[i];
        key = obj.name;
        
        output[key] = output[key] || [];
        output[key].push(obj);    
    } 
    return output
}
INPUT = [
    {name: 'abc', address: 'sss'},
    {name: 'abc', address: 'sss1'},
    {name: 'xyz', address: 'sss2'},
  ];

console.log(groupby(INPUT));