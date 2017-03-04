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

	this.toString = function() {
		console.log(array);
	};


	var swap = function(arr, i, j) {
		var temp = arr[i];
		arr[i] = array[j];
		arr[j] = temp;
	};

	var insertionSort = function(arr) {
		var length = arr.length,
			temp;

		for (var i = 1; i < length; i++) {
			for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
				swap(arr, j, j - 1);
			}
		}

		return arr;
	};

	this.isSorted = function() {
		var length = array.length,
			reverse = 0;
		for (var i = 1; i < length; i++) {
			if (array[i] < array[i - 1]) {
				reverse++;
			}
		}
		if (reverse === 0) {
			return true;
		} else {
			if (reverse < 100) {
				insertionSort(array);
				return true;
			}
			return false;
		}
	}

	var merge = function(ltr, rtr) {
		var ltrLength = ltr.length,
			rtrLength = rtr.length,
			li = 0,
			rj = 0,
			result = [];

		while (li < ltrLength && rj < rtrLength) {
			if (ltr[li] < rtr[rj]) {
				result.push(ltr[li++]);
			} else {
				result.push(rtr[rj++]);
			}
		}

		while (li < ltrLength) {
			result.push(ltr[li++]);
		}

		while (rj < rtrLength) {
			result.push(rtr[rj++]);
		}

		return result;
	};

	var mergeSortRec = function(arr) {
		var length = arr.length;

		if (length === 1) {
			return arr;
		}

		if(length <= 10) {
			return insertionSort(arr);
		}

		var mid = Math.floor(length / 2),
			ltr = arr.slice(0, mid),
			rtr = arr.slice(mid, length);

		return merge(mergeSortRec(ltr), mergeSortRec(rtr));
	};

	this.mergeSort = function() {
		if (!this.isSorted()) {
			array = mergeSortRec(array);
		}
	}
}