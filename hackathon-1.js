//bai 1
function findlongest(str){
  var words = str.split(' ');
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
    	var thatword = words[i];
      maxLength = words[i].length;
    }
  }
  console.log(maxLength + ", " + thatword );
  return maxLength
}
//bai 3
function growth(arr){

 if ((arr[0] >= 0)&&(arr[0]<arr[1])&&(arr[1]<arr[2])&&(arr[2]<arr[3])&&(arr[3]<arr[4])&&(arr[4] <arr[5]))
 	{return true}
  else {return false}
}
//bai 