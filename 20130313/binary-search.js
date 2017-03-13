/*
 * @Author: hwaphon
 * @Date:   2017-03-13 10:17:46
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-13 12:00:22
 */

function ArrayList() {
	var array = [];

	this.push = function(value) {
		array.push(value);
	};

	this.get = function(index) {
		return array[index];
	};

	var binarySearch = function(value, low, high) {
		if (high < low) {
			return low;
		}

		var mid = low + Math.floor((high - low) / 2);
		var cmp = array[mid] - value;
		if (cmp < 0) {
			return binarySearch(value, mid + 1, high);
		} else if (cmp > 0) {
			return binarySearch(value, low, mid - 1);
		} else {
			return mid;
		}
	};

	var binarySearch2 = function(value, low, high) {
		var lo = low,
			hi = high;

		while (lo <= hi) {
			var mid = lo + Math.floor((hi - lo) / 2),
				cmp = array[mid] - value;

			if (cmp > 0) {
				hi = mid - 1;
			} else if (cmp < 0) {
				lo = mid + 1;
			} else {
				return mid;
			}
		}

		return lo;
	};

	this.search = function(value) {
		index = binarySearch(value, 0, array.length);
		return index;
	};

	this.ceiling = function(value) {
		var index = this.search(value);
		return this.get(index);
	};

	this.floor = function(value) {
		var index = this.search(value);

		if(array[index] === value) {
			return array[index];
		}

		if(index === 0) {
			return -1;
		}

		return array[index - 1];
	};
}