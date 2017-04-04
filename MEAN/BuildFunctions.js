function runningLogger(){
    console.log("I am running!");
}

function multiplyByTen(num){
    return num * 10;
}
console.log(multiplyByTen(5));

function stringReturnOne(){
    return "hey";
}

function stringReturnTwo(){
    return "boo";
}

function caller(x){
    if (typeof(x) == 'function') {
        x();
    }
}
caller(function d(){console.log("zoo");});

function myDoubleConsoleLog(a,b){
    if (typeof(a)=='function' && typeof(b)=='function'){
        console.log(a());
        console.log(b());
    }
}

myDoubleConsoleLog(function d(){return("zoob");}, function e(){return("zoop");})

function caller2(j){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(j)=='function'){
      j(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
