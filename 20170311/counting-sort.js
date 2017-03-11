/*
 * @Author: hwaphon
 * @Date:   2017-03-11 12:00:28
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-11 12:53:20
 */
	function countSort(array, low, max) {
		var length = array.length,
			countArray = [],
			i,
			k = max - low + 1;

		for (i = 0; i < k; i++) {
			countArray[i] = 0;
		}

		for (i = 0; i < length; i++) {
			countArray[array[i] - low]++;
		}

		var z = 0;
		for (i = 0; i < k; i++) {
			while (countArray[i]-- > 0) {
				array[z++] = i + low;
			}
		}

		console.log(countArray.length);
	}