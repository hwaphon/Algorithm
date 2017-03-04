/*
 * @Author: hwaphon
 * @Date:   2017-03-03 13:59:20
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-04 08:55:01
 */
function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

	function bubleSort(array) {
		var length = array.length;

		for (var i = 0; i < length; i++) {
			for (var j = 0; j < length - i - 1; j++) {
				if (array[j] > array[j + 1]) {
					swap(array, j, j + 1);
				}
			}
		}
	}