// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var currentVol = 3;
var currentPlaying = false;
var playTime = 0;
var songPointer = 6;

function init() {
	// Your code goes here
	volLevels = document.getElementsByClassName("volume-level");
	setVol();
	setInterval(playSong, 1000);
};

function setVol() {
	for (var i = 0; i < 6; i++) {
		volLevels[i].style.backgroundColor = "#ffffff";
	}
	for (var i = 0; i < currentVol; i++) {
		volLevels[i].style.backgroundColor = "#9f5cc4";
	}
}

function volUp() {
	// Your code goes here
	if (currentVol < 6) {
		currentVol++;
		setVol();
	}
}

function volDown() {
	// Your code goes here
	if (currentVol > 0) {
		currentVol--;
		setVol();
	}
}

function switchPlay(event) {
	// Your code goes here
	if (!currentPlaying) {
		event.innerHTML = "<span class=\"material-icons\">pause</span>";
	} else {
		event.innerHTML = "<span class=\"material-icons\">play_arrow</span>";
	}
	currentPlaying = !currentPlaying;
}

function playSong() {
	playTime = document.getElementById("volume-bar").value;
	if (currentPlaying) {
		if (playTime < 180) {
			playTime++;
			document.getElementById("volume-bar").value = playTime;
			document.getElementById("time-elapsed").innerHTML = secondsToMs(playTime);
		} else {
			nextSong();
		}
	}
}

function reInit() {
	playTime = 0;
	document.getElementById("volume-bar").value = playTime;
	document.getElementById("time-elapsed").innerHTML = secondsToMs(playTime);
	document.getElementsByClassName("player-song-name")[0].innerHTML = tracklist[songPointer];
}

function nextSong() {
	// Your code goes here
	songPointer++;
	songPointer %= 10;
	reInit();
}

function prevSong() {
	// Your code goes here
	songPointer--;
	songPointer = (songPointer + 10) % 10;
	reInit();
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();