const base = [1, 2];
const extended = [...base, 3, 4];
console.log('[Spread] Array:', extended);
const user = { name: 'Zevi' };
const fullUser = { ...user, age: 28 };
console.log('[Spread] Object:', fullUser);
