/*
 * @Author: hwaphon
 * @Date:   2017-03-07 14:34:44
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-07 16:16:39
 */

function PriorityQueue() {

	var length = 0,
		head = null;

	function Node(element, priority) {
		this.element = element;
		this.priority = priority;
		this.next = null;
	}

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	this.enqueue = function(element, priority) {
		var item = new Node(element, priority),
			current = head;

		if (this.isEmpty()) {
			head = item;
		} else if (head.priority < item.priority) {
			item.next = head;
			head = item;
		} else {
			var added = false;
			while (current) {
				if (current.priority < item.priority) {
					item.next = current.next;
					current.next = item;
					break;
				} else {
					if (current.next == null) {
						current.next = item;
					}
					current = current.next;
				}
			}
		}

		length++;
	};

	this.print = function() {
		var current = head;
		while (current) {
			console.log(current);
			current = current.next;
		}
	};

}