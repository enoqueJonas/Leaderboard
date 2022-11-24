export default async function createGame(url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    body: {
      name: 'Moneting.net',
    },
  });
  return response.json();
}