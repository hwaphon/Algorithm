/*
 * @Author: hwaphon
 * @Date:   2017-03-05 08:35:48
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-05 10:51:33
 */
function ArrayList() {
	var array = [];
	this.insert = function(value) {
		array.push(value);
	};
	this.shuffle = function() {
		array.sort(function() {
			return Math.random() - 0.5;
		});
	};
	var insertionSort = function(arr, low, high) {
		for (var i = low + 1; i <= high; i++) {
			for (var j = i; j >= low && arr[j] < arr[j - 1]; j--) {
				swap(arr, j, j - 1);
			}
		}
	};
	this.toString = function() {
		console.log(array);
	};
	var swap = function(arr, i, j) {
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	};
	var partition = function(arr, low, high) {
		var i = low,
			j = high + 1,
			value = arr[low];
		while (true) {
			while (arr[++i] < value) {
				if (i === high) {
					break;
				}
			}
			while (arr[--j] > value) {
				if (j === low) {
					break;
				}
			}
			if (i >= j) {
				break;
			}
			swap(arr, i, j);
		}
		swap(arr, low, j);
		return j;
	};
	var quickSortRes = function(arr, low, high) {
		if (high <= low) {
			return;
		}
		if ((high - low + 1) < 10) {
			insertionSort(arr, low, high);
			return;
		}
		var j = partition(arr, low, high);
		quickSortRes(arr, low, j - 1);
		quickSortRes(arr, j + 1, high);
	};
	var quick3Way = function(array, low, high) {
		if (high <= low) {
			return;
		}
		var lt = low,
			i = low + 1,
			gt = high,
			v = array[low];

		while (i <= gt) {
			var cmp = array[i] - v;
			if (cmp < 0) {
				swap(array, lt++, i++);
			} else if (cmp > 0) {
				swap(array, i, gt--);
			} else {
				i++;
			}
		}

		quick3Way(array, low, lt - 1);
		quick3Way(array, gt + 1, high);
	};
	this.quickSort = function() {
		quickSortRes(array, 0, array.length - 1);
	};
}