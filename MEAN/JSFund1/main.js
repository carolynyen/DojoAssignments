var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (var i in x) {
    console.log(x[i])
}

x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

var sum=0;
for (var i=1; i < 501; i++){
    sum += i
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];
var sum2 = 0;
for (var i in arr){
    sum2 += arr[i];
    if (arr[i] <= min) {
        min = arr[i]
    }
}
console.log(min);
console.log(sum2/arr.length);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var i in newNinja){
    console.log(i, newNinja[i]);
}
