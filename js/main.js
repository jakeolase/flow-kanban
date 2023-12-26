import Kanban from "./view/Kanban.js";

new Kanban(
	document.querySelector(".kanban")
);

function updateDateTime() {
	var currentDate = new Date();
	var options = { 
		month: 'long', 
		day: 'numeric', 
		year: 'numeric', 
		hour: 'numeric', 
		minute: 'numeric', 
		hour12: true 
	};

	var formattedDateTime = currentDate.toLocaleString('en-US', options);

	document.getElementById('datetime').innerText = formattedDateTime;
}

// Initial update
updateDateTime();

// Update every second (1000 milliseconds)
setInterval(updateDateTime, 1000);