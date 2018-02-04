var time = new Date().getHours();
var noon = 12; // 12PM
var evening = 18; // 6PM
var wakeUpTime = 5; // 5AM
var lunchTime = 12; // 12PM
var partyTime = 21; // 8PM
var napTime = lunchTime + 2; // 2PM

// function updates the message and image on the clock based on the times
var updateClock = function() {
	var messageText;
	var image = "https://s3.amazonaws.come/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
	var message = document.getElementById("timeEvent");
	var lolcat = document.getElementById("lolcat");

	if (time === partyTime) {
		messageText = "It's time to part-tayyy!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time === napTime) {
		messageText = "Snooze time!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time === lunchTime) {
		messageText = "Get in my bellay!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time === wakeUpTime) {
		messageText = "Wakey wakey eggs and bakey!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Top of the mornin' to ya!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else if (time > evening) {
		messageText = "Good evening friends!!";
		image = "http://i2.wp.com/catnamescity.com/wp-content/uploads/2012/08/Funny-Cat-Names_Cat-Names-City_Silly.jpg?fit=650%2C485";
	} else {
		messageText = "Good afternoon friends!!";
		image = "http://www.masalaanews.com/wp-content/uploads/2017/06/funny-cat-videos.jpg";
	}

	message.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();
	
};

// function that displays the running clock on the page with the current time
var showCurrentTime = function() {
	// display the string on the webpage
	var clock = document.getElementById("clock");
	
	var currentTime = new Date();
	
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	
	// set hours
	if (hours >= noon) {
		meridian = "PM";
	}
	if (hours > noon) {
		hours = hours - 12;
	}
	
	// set minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	// set seconds
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	// put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	
	clock.innerText = clockTime;
};

updateClock();

// code to get the clock to increment every second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var isPartyTime = false;

// function that instantly changes it to party time by clicking the button
var partyEvent = function() {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party Over";
		partyTimeButton.style.backgroundColor = "#FFF";
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "Party Time!";
		partyTimeButton.style.backgroundColor = "#FFF72B";
	}
};

// functions that allow the visitor to select a wake up time, nap time, and lunch time
var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
	napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
