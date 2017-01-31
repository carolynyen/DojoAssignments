function numbersonly(arr){
  var newarr=[];
  for (var num = 0; num < arr.length; num++){
    if (typeof arr[num] == "number"){
      newarr.push(arr[num]);
    }
  }
  return newarr;
}
console.log(numbersonly([1, "apple", -3, "orange", 0.5]));

function numbers_in_same_array(arr){
  for (var num = 0; num < arr.length; num ++){
      if (typeof arr[num] !== "number"){
        for (var i = num+1; i < arr.length; i++){
          if (typeof arr[i] == 'number'){
            var temp = arr[num]
            arr[num] = arr[i];
            arr[i] = temp;
        }
      }
    }
  }
  for (var i = arr.length - 1; i >=0; i--){
    if (typeof arr[i] !== "number"){
      arr.pop();
    }
  }
  return arr;
}
console.log(numbers_in_same_array(["hi", 2, 1, "apple", "orange", 0.5, 'hey', 9]));
