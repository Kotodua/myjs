//drawer.js


function prepareTable(date){
		var reqDate = new Date(date);
		var today = new Date();
		var daysToDisplay = 0;
		var startDay = reqDate;
		var diffDays = Math.ceil(parseInt(reqDate - today)/(1000 * 3600 * 24));

		if (diffDays < 0){
			console.log('error');
		} else {
			switch (diffDays){
				case 0:
					daysToDisplay = 3;
					startDay = today;
					break;
				case 1:
					daysToDisplay = 4;
					startDay.setDate(startDay.getDate() - 1);
					break;
				default:
					daysToDisplay = 5;
					startDay.setDate(startDay.getDate() - 2);
					break;
			};		
		};

		return {"days": daysToDisplay, "startDay": startDay};
};


function drawTable(tableData){
	var days = tableData.days;
	var startDay = tableData.startDay;
	var htmlNavPills = '';
	var htmlTabsContent = '';
	var table = [];

	for (var i = 0; i < days; i++){
		console.log('i = '+i);
		console.log('current day: '+startDay);
		var currentMonth = (startDay.getMonth()+1)
		if (currentMonth < 10) { currentMonth = '0' + currentMonth; }
		var currentDate = startDay.getFullYear()+'-'+currentMonth+'-'+startDay.getDate();
		htmlNavPills += '<li id="li'+i+'">'+
						'<a href="#'+i+'a" data-toggle="tab" id="header'+i+'">'+currentDate+'</a>'+
						'</li>';
		
		htmlTabsContent += '<div class="tab-pane" id="'+i+'a"><div class="loader" id="loader'+i+'"></div></div>';
		
		table.push({"day": currentDate, "index": i});			
		startDay.setDate(startDay.getDate()+1);

	}
	document.getElementById("navPills").innerHTML = htmlNavPills;
	document.getElementById("tabContent").innerHTML = htmlTabsContent;
	document.getElementById("exTab1").style.display = 'block';

	return table;
}
