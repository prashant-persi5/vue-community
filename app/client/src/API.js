const API_URL = 'http://localhost:3000';

export default async function isAdmin() {
  const response = await fetch(`${API_URL}/auth/isAdmin`);
  console.log(response);
  return response.json();
}
