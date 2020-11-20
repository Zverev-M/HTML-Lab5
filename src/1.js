let fillArray = function() {
    let array = [];
    let n;

    for (let i = 0; i < 100; i++) {
        n = Math.floor(Math.random() * 1000);
        array.push(n);
    }

    return array;
};

let getMin = function(array) {
    let min = 1001;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
};

let getMax = function(array) {
    let max = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
};

let getMedianSortedArray = function(array) {
    let half = array.length / 2;

    if (array.length % 2 === 0) {
        return (array[half] + array[half - 1]) / 2;
    }

    return array[Math.floor(half)];
};

let partition = function(array, l, r) {
    let m = array[Math.floor((l + r) / 2)];
    let i = l;
    let j = r;
    while (i <= j) {
        while (array[i] < m) {
            i++;
        }

        while (array[j] > m) {
            j--;
        }

        if (i >= j) {
            break;
        }

        //swap(a[i++], a[j--])

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        i++;
        j--;
    }

    return j
};

let quicksort = function(array, l, r) {
    if (l < r) {
        let q = partition(array, l, r);
        quicksort(array, l, q);
        quicksort(array, q + 1, r);
    }
};

/*let countTag = function() {
    let tags = document.getElementsByTagName("*");
    let map = new Map();

    for (let tag of tags) {
        let name = tag.tagName;
        if (map.has(name)) {
            let i = map.get(name) + 1;
            map.set(name, i);
        } else {
            map.set(name, 1);
        }
    }

    return map;
};*/

let array = fillArray();
//let array = [5, 4, 3, 2, 1, 11, 25, 42, 36, 81, 72, 90, 10, 8, 9, 5];
quicksort(array, 0, array.length - 1)
console.log(array);
console.log(getMin(array));
console.log(getMax(array));
console.log(getMedianSortedArray(array));


