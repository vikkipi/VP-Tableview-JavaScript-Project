$(document).ready(function(){

	var tableCells = [
	{
		id			: 'cell-1',
		classname	: 'cell-1-class',
		content		: 'Sunday'
	},

	{
		id			: 'cell-2',
		classname	: 'cell-2-class',
		content		: 'Monday'
	},

	{
		id			: 'cell-3',
		classname	: 'cell-3-class',
		content		: 'Tuesday'
	},

	{
		id			: 'cell-4',
		classname	: 'cell-4-class',
		content		: 'Wednesday'
	},

	{
		id			: 'cell-5',
		classname	: 'cell-5-class',
		content		: 'Thursday'
	},

	{
		id			: 'cell-6',
		classname	: 'cell-6-class',
		content		: 'Friday'
	}

	]

	var tableView = new VPTableView({
		id				: 'tableview-container',
		tableCells 		: tableCells,
		defaultCell 	: 0
	});

	tableView.onChange(function(cell) {
		if (tableCells[0]) {
			console.log(cell);
		}
	});

});