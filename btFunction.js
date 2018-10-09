function bai1(soCanBinhphuong){
	var value = Math.pow(soCanBinhphuong, 2);
		console.log(soCanBinhphuong);
		document.write("Số cần bình phương là" + soCanBinhphuong)}

	function bai2(a,b,c){
		var value = 2*a + 3*b - c
		let pow = Math.pow(value, 2 );
		console.log(pow);
		document.write("Số cần tìm là" + pow)
	}
	function bai3(a){
		var x=  a.substring(0,10);
		console.log(x + "...");
		document.write(x + "...")


	}
	function bai4(ucFirstLetter){
		var firstlet = ucFirstLetter.charAt(0);
		var upCase = 	firstlet.toUpperCase();
		var stringNoFirstLetter = ucFirstLetter.slice(1);
		console.log(upcase + stringNoFirstLetter);
		document.write(upcase + stringNoFirstLetter);
	}
	function bai5(maxNumber){
		var maxNumber = ;
	   var maxInNumber = Math.max(maxNumber);
	   console.log(maxInNumber)
	}
