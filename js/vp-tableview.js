/*********************************

 * VP Tableview
 * Code by Viktoriia Pshenychko
 * http://www.vizhually.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015

*********************************/

function VPTableView(hash) {
	this.id 			= hash.id;
	this.tableCells 	= hash.tableCells;
	this.cells = [];
	setupTableView.apply(this);
	setupCells.apply(this);
	bindEvents.apply(this);
	
	this.changeFunctions 	= [];

}

function setupTableView() {
	this.container = $('#' + this.id);
	this.tableView = $('<ul>');
	this.tableView.addClass('table-view');
	this.container.append(this.tableView);
}

function setupCells() {

    for (var i = 0; i < this.tableCells.length; i++) {

        var cell = $('<li>');
        cell.addClass(this.tableCells[i].classname);
        cell.append(this.tableCells[i]['content']);
        cell.addClass('default-cell');
        this.tableView.append(cell);

        var cellWidth = this.container.width();
        var cellHeight = cell.height();

        cell.css({
                'position'              : 'relative',
		        'width' 		        : cellWidth,
                'height'                : cellHeight,
                'left'                  : 0,
                'top'                   : 0
        });
    }

	this.cells.push(cell);
}

function bindEvents() {

    for (var i = 0; i < this.cells.length; i++) {

    	var tblCell = this.tableCells[i]

        var cell = this.cells[i];

        cell.bind('click', function(evt){

                _this           = this[0]
                tblCell            = this[1]

                for (var i = 0; i < _this.changeFunctions.length; i++) {
                        var changeFunction = _this.changeFunctions[i]
                        changeFunction(tblCell);
                };

        }.bind([this,tblCell]) );
    }
}

VPTableView.prototype.onChange = function(changeFunction) {
	this.changeFunctions.push(changeFunction);
}