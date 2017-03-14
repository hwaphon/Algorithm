/*
 * @Author: hwaphon
 * @Date:   2017-03-14 09:40:59
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2017-03-14 11:26:10
 */

function BST() {
	var root = null;

	var Node = function(key, value, n) {
		this.key = key;
		this.value = value;
		this.n = n;
		this.left = null;
		this.right = null;
	};

	var size = function(node) {
		if (node === null) {
			return 0;
		}
		return node.n;
	};

	this.size = function() {
		return size(root);
	};

	var compare = function(v1, v2) {
		return v1 - v2;
	};

	var get = function(node, key) {
		if (node === null) {
			return null;
		}

		var cmp = compare(key, node.key);
		if (cmp < 0) {
			return get(node.left, key);
		} else if (cmp > 0) {
			return get(node.right, key);
		} else {
			return node;
		}
	};

	this.get = function(key) {
		var node = get(root, key);
		return node === null ? undefined : node.value;
	};

	var put = function(node, key, value) {
		if (node === null) {
			return new Node(key, value, 1);
		}

		var cmp = compare(key, node.key);
		if (cmp > 0) {
			node.right = put(node.right, key, value);
		} else if (cmp < 0) {
			node.left = put(node.left, key, value);
		} else {
			node.value = value;
		}
		node.n = size(node.left) + size(node.right) + 1;
		return node;
	};

	this.put = function(key, value) {
		root = put(root, key, value);
	};

	var min = function(node) {
		if (node.left === null) {
			return node;
		}

		return min(node.left);
	};

	this.min = function() {
		var node = min(root);

		return node === null ? undefined : node.key;
	};

	var max = function(node) {
		if (node.right === null) {
			return node;
		}

		return max(node.right);
	};

	this.max = function() {
		var node = max(root);
		return node === null ? undefined : node.key;
	};

	var floor = function(node, key) {
		if(node === null) {
			return null;
		}

		var cmp = compare(key, node.key);
		if(cmp === 0) {
			return node;
		}

		if(cmp < 0) {
			return floor(node.left, key);
		}

		var t = floor(node.right, key);
		if(t != null) {
			return t;
		} else {
			return node;
		}
	};

	this.floor = function(key) {
		var node = floor(root, key);
		return node === null ? undefined : node.key;
	};

	var ceiling = function(node, key) {
		if(node === null) {
			return null;
		}
	};
}