/*
* @Author: hwaphon
* @Date:   2017-03-03 10:20:23
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-03-04 08:55:04
*/

	function selectionSort(array) {
		var length = array.length,
			min,
			temp;

		for(var i = 0; i < length; i++) {
			min = i;

			for(var j = i; j < length;j++) {
				if (array[min] > array[j]) {
					min = j;
				}
			}

			if (min !== i) {
				temp = array[i];
				array[i] = array[min];
				array[min] = temp;
			}
		}
	}