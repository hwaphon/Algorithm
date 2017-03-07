/*
 * @Author: hwaphon
 * @Date:   2017-03-07 09:13:15
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-07 09:43:06
 */

function MaxPQ() {
	var array = [],
		length = 0;

	var less = function(i, j) {
		if(array[j] > array[i]) {
			return true;
		}

		return false;
	};

	var exch = function(i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	var swim = function(k) {
		while (k > 1 && less(k / 2, k)) {
			exch(k, k / 2);
			k = k / 2;
		}
	};

	var sink = function(k) {
		while (2 * k <= length) {
			var j = 2 * k;

			if (j < N && less(j, j + 1)) {
				j++;
			}

			if(!less(k,j)) {
				break;
			}

			exch(k, j);
			k = j;
		}
	};

	this.insert = function(value) {
		array[++length] = value;
		swim(length);
	};

	this.delMax = function() {
		var value = array[1];
		exch(1,length--);
		array.pop();
		sink(1);
		return value;
	};

	this.toString = function() {
		console.log(array);
	};
}