//pull data.js
var tableData = data;
console.log(tableData);

//reference table body
var tbody = d3.select("tbody");

//ufo sightings info for columns
tableData.forEach(function(ufosighting) {
	console.log(ufosighting);
	// Append one table row for each UFO Sighting
	var row = tbody.append("tr");

	//adding object.entries for sighting values
	Object.entries(ufosighting).forEach(function([key, value]) {
		console.log(key, value);
		var cell = row.append("td")
		cell.text(value);
	});
});

//search bar
var button = d3.select("#button");
button.on("click", runEnter);

function runEnter() {

	tbody.html('');

	//add select feature
	var inputelement = d3.select("#datetime");
	var inputvalue = inputelement.property("value");
	console.log(inputvalue);

	//filter datetime
	filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputvalue);
	console.log(filteredData);

	filteredData.forEach(function(ufosighting) {
		console.log(ufosighting);
		var row = tbody.append("tr");

		Object.entries(ufosighting).forEach(function([key, value]) {
			console.log(key, value);
			var cell = row.append("td")
			cell.text(value);
		});
	});
};






