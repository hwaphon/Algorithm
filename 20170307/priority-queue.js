/*
* @Author: hwaphon
* @Date:   2017-03-07 14:13:58
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-03-07 14:21:44
*/

function PriorityQueue() {
	var items = [];

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.size = function() {
		return items.length;
	};

	this.enqueue = function(element, priority) {
		var item = new QueueElement(element, priority);

		if(this.isEmpty()) {
			items.push(item);
		} else {
			var added = false,
				length = this.size();

			for(var i = 0; i < length; i++) {
				if(items[i].priority < item.priority) {
					items.splice(i,0,item);
					added = true;
					break;
				}
			}

			if(!added) {
				items.push(item);
			}
		}
	};

	this.print = function() {
		var length = this.size();
		for(var i = 0; i < length; i++){
			console.log(items[i]);
		}
	};
}