var hour = new Date();
var minute = new Date();
var second = new Date();

if (hour.getHours() < 12) {
  var txtHour = ("0" + hour.getHours()).substr(-2).toString();
  document.getElementById("timeAmPm").innerHTML = "AM";
} else {
  var numHours = new Date();
  numHours.setHours(hour.getHours() - 12);
  var txtHour = ("0" + numHours.getHours()).substr(-2).toString();
  document.getElementById("timeAmPm").innerHTML = "PM";
}

document.getElementById("timeNow").innerHTML = txtHour + ":" + ("0" + minute.getMinutes()).substr(-2) + " " + ("0" + second.getSeconds()).substr(-2);


var day = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var year = new Date();

document.getElementById("dateToday").innerHTML = days[day.getDay()] + ", " + months[month.getMonth()] + " " + ("0"+date.getDate()).substr(-2) + ", " + year.getFullYear();