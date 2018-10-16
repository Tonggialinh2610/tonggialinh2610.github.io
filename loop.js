//bai so 1
function giaiThua(num) {
   
var n = 1;
var i = 1;
while(i <= num){
   n *= i;
   i++;
}
   return n;
}
//bai so 2
function daoChuoi(str){
	var arr = str.split("");
	var daoArr = arr.reverse();
	var newStr = daoArr.join("");
	return newStr;
	
}
// bai so 3

