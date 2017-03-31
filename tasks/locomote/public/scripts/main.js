(function main(){

	var searchButton = document.getElementById("searchButton");

	document.getElementById("exTab1").style.display = 'none';
	document.getElementById("loader").style.display = 'none';

	var API = new flightAPI();

	searchButton.addEventListener('click', function(e){
		document.getElementById("loader").style.display = 'block';
		var date = dateInput.value;
		setTimeout(function(){
			var tableData = prepareTable(date);	
			var table = drawTable(tableData);

			table.forEach(function(tab){			
				setTimeout(function(){
					API.getResults(tab.day, tab.index);	
				}, 2000);	
			})
		}, 200);
	}, false);
	

})()

