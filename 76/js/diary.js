var publish = document.getElementById("publish");
var show = document.getElementById("show");
var txt = document.getElementById("txt");

publish.onclick = function() {
	f();
}
function f() {
	var diary = document.createElement("div");
	var p = document.createElement("p");
	var time = document.createElement("span");
	var date = new Date();
	time.innerHTML = getTime();
	diary.appendChild(time);
	p.innerHTML = txt.value;
	show.appendChild(diary);
	diary.appendChild(p);
	txt.value = "";
}

function getTime() {
	var myDate = new Date();
	var nowMonth = myDate.getMonth();
	var nowDay = myDate.getDay();
	var nowHours = myDate.getHours();
	var nowMin = myDate.getMinutes();
	
	var nowTime = nowMonth+1+"月"+nowDay+"日"+nowHours+":"+nowMin;
	return nowTime;
}













