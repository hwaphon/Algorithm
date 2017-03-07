/*
 * @Author: hwaphon
 * @Date:   2017-03-07 16:47:25
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-07 17:23:52
 */

function PriorityQueue() {

	var items = [],
		length = 0;

	function Item(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	var less = function(i, j) {
		if (items[i].priority < items[j].priority) {
			return true;
		}
		return false;
	};

	var exch = function(i, j) {
		var temp = items[i];
		items[i] = items[j];
		items[j] = temp;
	};

	var swim = function(k) {
		while (k > 1 && less(Math.floor(k / 2), k)) {
			exch(Math.floor(k / 2), k);
			k = Math.floor(k / 2);
		}
	};

	var sink = function(k) {
		while (2 * k <= length) {
			var j = 2 * k;
			if (j < length && less(j, j + 1)) {
				j++;
			}

			if (!less(k, j)) {
				break;
			}

			exch(k, j);
			k = j;
		}
	};

	this.enqueue = function(element, priority) {
		var item = new Item(element, priority);

		items[++length] = item;
		swim(length);
	};

	this.dequeue = function() {
		var max = items[1];
		exch(1, length--);
		items[length + 1] = null;
		sink(1);
		return max;
	};

	this.print = function() {
		for (var i = 1; i <= length; i++) {
			console.log(items[i]);
		}
	};
}