async function getUser() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const data = await res.json();
    console.log('[Async/Await] User:', data.name);
  } catch (e) {
    console.error('[Async/Await] Error:', e);
  }
}
getUser();
