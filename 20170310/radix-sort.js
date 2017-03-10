/*
* @Author: hwaphon
* @Date:   2017-03-10 12:36:05
* @Last Modified by:   hwaphon
* @Last Modified time: 2017-03-10 12:36:45
*/

function radixSort(array) {
    var bucket = [],
        l = array.length,
        loop,
        str,
        i,
        j,
        k,
        t,
        max = array[0];
    for (i = 1; i < l; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    loop = (max + '').length;
    for (i = 0; i < 10; i++) {
        bucket[i] = [];
    }
    for (i = 0; i < loop; i++) {
        for (j = 0; j < l; j++) {
            str = array[j] + '';
            if (str.length >= i + 1) {
                k = parseInt(str[str.length - i - 1]);
                bucket[k].push(array[j]);
            } else { // 高位为 0
                bucket[0].push(array[j]);
            }
        }
        array.splice(0, l);
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