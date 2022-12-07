var deadline = new Date ("Dec 31, 2100 12:00:00:0000").getTime();

var x = setInterval(function(){
	var now = new Date().getTime();
	var remaining_time = deadline - now;

	var years = Math.floor(remaining_time/(1000*60*60*24*365));
	// var days = Math.floor(remaining_time/(1000*60*60*24));

	var days = Math.floor((remaining_time%(1000*60*60*24*365))/(1000*60*60*24));

	var hours = Math.floor((remaining_time%(1000*60*60*24))/(1000*60*60));
	var minutes = Math.floor((remaining_time%(1000*60*60))/(1000*60));

	// 1 sec = 1000 ms
	var seconds = Math.floor((remaining_time%(1000*60))/1000);
	
	

	document.getElementById("year").innerHTML = years;
	document.getElementById("day").innerHTML = days;
	document.getElementById("hour").innerHTML = hours;
	document.getElementById("minute").innerHTML = minutes;
	document.getElementById("second").innerHTML = seconds;
	
	

	if(remaining_time<0){
		clearInterval(x);
		document.getElementById("Display").innerHTML = "TIME UP";
		document.getElementById("year").innerHTML = '0';
		document.getElementById("day").innerHTML = '0';
		document.getElementById("hour").innerHTML = '0';
		document.getElementById("minute").innerHTML = '0';
		document.getElementById("second").innerHTML = '0';
	
		
	}
}, 1000);