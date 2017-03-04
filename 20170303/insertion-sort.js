/*
* @Author: hwaphon
* @Date:   2017-03-03 12:50:38
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-03-04 08:55:02
*/
	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	function insertionSort(array) {
		var length = array.length,
			temp;

		for(var i = 1; i < length; i++) {
			for(var j = i; j > 0 && array[j] < array[j - 1]; j--) {
				swap(array, j, j-1);
			}
		}
	}
