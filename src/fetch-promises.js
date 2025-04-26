fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(data => console.log('[Fetch/Promise] User:', data.name))
  .catch(err => console.error('[Fetch/Promise] Error:', err));
