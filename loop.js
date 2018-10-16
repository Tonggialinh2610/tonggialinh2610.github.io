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
function duplicate(num) {
    for ( var i= 1; i <= 10 ;i =i+1)
    {document.write("-" + num)}
 } 
// bai so 4
function tenHocVien(arr){
    return arr.sort(function(a, b) {return a.localeCompare(b)});
    for (let i = 0; i < arr.length; i++) {document.write(i + arr)}

}
