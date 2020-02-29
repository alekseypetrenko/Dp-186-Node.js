function fib(n) {
	let prev = 0, next = 1;
	let arr = [0]
	for (let i = 0; i < n; i++) {
		next = prev + next;
		prev = next - prev;
		arr.push(0)
		arr.push(next)
	}
	return arr
}

function fibInRange(obj) {
	const result = [];
	const fibs = fib(200);
	const keys = Object.keys(obj);
	if (keys.length > 2) {
		return { status: "failed", reason: "Больше двух аргументов" };
	}
	for (let i = 0; i < keys.length; i++) {
		for (let key in obj) {
			obj[key] = Number(obj[key]);
			obj[key] = Math.abs(obj[key]);
			if (typeof obj[key] != "number" || !Number.isInteger(obj[key])) {
				return { status: "failed", reason: "Ключи объекта должны быть целыми числами" };
			}
		}
	}

	if (keys.length == 2) {
		obj.min = Math.abs(obj.min);
		obj.max = Math.abs(obj.max);
		for (let i = obj.min; i < fibs.length; i++) {
			if (fibs[i] >= i && fibs[i] <= obj.max) {
				result.push((fibs[i]));
			}
		}
	} else {
		for (let i = 0; i < fibs.length; i++) {
			const len = Math.ceil(Math.log10(fibs[i] + 1));
			if (len == obj.length)
				result.push(fibs[i]);
		}
	}
	return result

}

console.log(fibInRange({ length: "9" }));
console.log(fibInRange({ min: 0, max: "1000" }));
console.log(fibInRange({ length: 10 }));
console.log(fibInRange({ length: "20" }));
