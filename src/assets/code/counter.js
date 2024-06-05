/**
 * @param {0|1} a
 * @param {0|1} b
 * @param {0|1} c
 * @param {0|1} d
 * @returns {(0|1)[]}
 */
function counter(a, b, c, d) {
	const sum = a + b + c + d;
	return [
		(sum & 0x04) >> 2,
		(sum & 0x02) >> 1,
		(sum & 0x01)
	];
}

// [0, 1, 1]
counter(1,1,1,0);

