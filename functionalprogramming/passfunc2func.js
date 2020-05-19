function amFirst(x){
	return x+1;
}
function amSecond(x){
	 return x%2;
}
function amThird(x){
	return x*3;
}
console.log(amThird(amSecond(amFirst(4))));