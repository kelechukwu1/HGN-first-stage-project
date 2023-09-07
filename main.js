import "./style.css";
// Get references to the HTML elements
const dayElement = document.getElementById("day");
const currentDateElement = document.getElementById("currentDate");

// Function to update the day of the week
function updateDayOfWeek() {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const today = new Date();
	const dayOfWeek = daysOfWeek[today.getUTCDay()];
	dayElement.textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateCurrentTime() {
	const today = new Date();
	const utcTime = today.toUTCString();
	currentDateElement.textContent = utcTime;
}

// Call the functions to update the day of the week and current UTC time
updateDayOfWeek();
updateCurrentTime();
