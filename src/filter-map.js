const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
const doubled = nums.map(n => n * 2);
console.log('[Filter/Map] Evens:', evens, '| Doubled:', doubled);
