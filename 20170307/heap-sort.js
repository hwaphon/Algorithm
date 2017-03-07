/*
* @Author: hwaphon
* @Date:   2017-03-07 09:44:24
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-03-07 10:19:07
*/

function Heap() {
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

	this.insert = function(value) {
		array[++length] = value;
	};

	var sink = function(k,N) {
		while(2 * k <= N) {
			var j = 2 * k;
			if(j < N && less(j, j+1)) {
				j++;
			}

			if(!less(k, j)) {
				break;
			}

			exch(k,j);
			k = j;
		}
	};

	this.sort = function() {

		var N = length;
		for(var k = length / 2; k >=1; k--) {
			sink(k,N);
		}

		while(N > 1) {
			exch(1, N--);
			sink(1,N);
		}
	};

	this.toString = function() {
		console.log(array);
	};
}