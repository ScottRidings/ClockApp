setInterval(newDateTime, 1000)

function newDateTime() {
	var timeNow = new Date();

    var displayMode = document.getElementById('cbxDisplayMode').checked;
    if (displayMode === false) {

        if (timeNow.getHours() < 12) {
            if (timeNow.getHours() === 0) {
                txtHour = '12';
            } else {
                var txtHour = ('0' + timeNow.getHours()).substr(-2).toString();
            }
            document.getElementById('timeAmPm').innerHTML = 'AM';
        } else {
            timeNow.setHours(timeNow.getHours() - 12);
            var txtHour = ('0' + timeNow.getHours()).substr(-2).toString();
            document.getElementById('timeAmPm').innerHTML = 'PM';
        }

    } else {
        var txtHour = ('0' + timeNow.getHours()).substr(-2).toString();
        document.getElementById('timeAmPm').innerHTML = '';
    }

    document.getElementById('timeNow').innerHTML = txtHour + ':' + ('0' + timeNow.getMinutes()).substr(-2) + ' ' + ('0' + timeNow.getSeconds()).substr(-2);

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var dateNow = new Date();

    document.getElementById('dateToday').innerHTML = days[dateNow.getDay()] + ', ' + months[dateNow.getMonth()] + ' ' + ('0' + dateNow.getDate()).substr(-2) + ', ' + dateNow.getFullYear();
}