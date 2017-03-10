function radixSort(array) {

	if (array.length <= 1) {
		return array;
	}

	var length = array.length,
		i,
		j,
		str,
		k,
		t,
		loop,
		bucket = [],
		max = array[0];

	for (i = 1; i < length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}

	loop = (max + '').length;

	for (i = 0; i < 10; i++) {
		bucket[i] = [];
	}

	for (i = 0; i < loop; i++) {
		for (j = 0; j < length; j++) {
			str = array[j] + '';

			if (str.length - 1 >= i) {
				k = parseInt(str[str.length - i - 1]);
				bucket[k].push(array[j]);
			} else {
				bucket[0].push(array[j]);
			}
		}

		array.splice(0, length);

		for (j = 0; j < 10; j++) {
			t = bucket[j].length;
			for (k = 0; k < t; k++) {
				array.push(bucket[j][k]);
			}
			bucket[j] = [];
		}
	}
	return array;
}