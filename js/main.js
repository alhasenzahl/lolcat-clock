var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() {
	
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
var eventMessageJS = document.getElementById('timeEvent');
var message;

if (time === partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    message = "TIME TO PARRRT-TAY!!";
} else if (time === napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    message = "NAP TIME ZZZ";
} else if (time === lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    message = "GET IN MY BELLY!!";
} else if (time === wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    message = "WAKEY WAKEY EGGS AND BAKEY";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    message = "TOP OF THE MORNIN TO YA!";
} else if (time > evening) {
	image = "http://i2.wp.com/catnamescity.com/wp-content/uploads/2012/08/Funny-Cat-Names_Cat-Names-City_Silly.jpg?fit=650%2C485";
    message = "GOOD EVENING FINE FOLKS!";
} else {
	image = "http://www.masalaanews.com/wp-content/uploads/2017/06/funny-cat-videos.jpg";
    message = "GOOD AFTERNOON FRIENDS!";
}

eventMessageJS.innerText = message;
lolcat.src = image;

showCurrentTime();

};

var showCurrentTime = function() {
	var clock = document.getElementById('clock');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = 'AM';
//set hours	
	if (hours >= noon) {
		meridian = 'PM';
	}
	if (hours > noon) {
		hours = hours - 12;
	}
//set minutes
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	
//set seconds 
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	
//put together the string that displays the time
	var clockTime = hours + ':' + minutes + ':' + seconds + '' + meridian + '!';
	
	clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);