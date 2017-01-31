function fancyarray(arr,reversed){
  if (reversed == true){
    for (var num = arr.length-1; num >= 0; num--){
      console.log(num, "->", arr[num]);
    }
  }
  else{
    for (var num = 0; num < arr.length; num++){
      console.log(num, "->", arr[num]);
    }
  }
}
fancyarray(["jill","jack","pat"]);
