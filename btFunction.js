	//bai so 1
	function bai1(soCanBinhphuong){
	var value = Math.pow(soCanBinhphuong, 2);
		console.log(soCanBinhphuong);
		document.write("Số cần bình phương là" + soCanBinhphuong)}
	//bai so 2
	function bai2(a,b,c){
		var value = 2*a + 3*b - c
		let pow = Math.pow(value, 2 );
		console.log(pow);
		document.write("Số cần tìm là" + pow)
	}
	//bai so 3
	function bai3(a){
		var x=  a.substring(0,10);
		console.log(x + "...");
		document.write(x + "...")


	}
	// bai so 4
	function bai4(ucFirstLetter){
		var firstlet = ucFirstLetter.charAt(0);
		var upCase = 	firstlet.toUpperCase();
		var stringNoFirstLetter = ucFirstLetter.slice(1);
		console.log(upcase + stringNoFirstLetter);
		document.write(upcase + stringNoFirstLetter);
	}
	// bai so 5
	function bai5(arr){
	
  		arr.sort(function(a, b){return a - b});
  		var min = arr[0];	 
  		return min ;
	document.write("Giá trị nhỏ nhất là " +min+ "<br/>")}
	
	// bai 6
	function bai6(arr){
		arr.sort() function(a,b){
			return a.localcompare();
		return arr ;
		document.write(arr)

	}
 

	
