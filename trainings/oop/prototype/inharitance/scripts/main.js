(function main(){

var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

//pockets -> bed -> table -> head.

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log(pockets.glasses); 


})()