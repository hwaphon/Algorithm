/*
 * @Author: hwaphon
 * @Date:   2017-03-03 13:39:04
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-04 08:55:02
 */
function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

	function shellSort(array) {
		var length = array.length,
			temp,
			h = 1;

		while (h < length / 3) {
			h = 3 * h;
		}

		while (h >= 1) {
			for (var i = h; i < length; i++) {
				for (var j = i; j >= h && array[j] < array[j - h]; j -= h) {
					swap(array, j, j - h);
				}
			}

			h = h / 3;
		}
	}