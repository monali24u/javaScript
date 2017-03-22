
function withoutDuplicates(arr){
    var out = [];

    for(var i=0; i<arr.length; i++) {
      if(i === 0 || arr[i] !== arr[i-1]) {
        out.push(arr[i]);
      }
    }
    return out;
}

function secondGreatLow(arry){
  var arr = withoutDuplicates(arry);
  arr.sort(function(a,b) { return a-b; });
  var result = arr[1] + ' ' + arr[arr.length-2];
  return result;
}


var arry1 = [7, 7, 12, 98, 106];
console.log(secondGreatLow(arry1));
