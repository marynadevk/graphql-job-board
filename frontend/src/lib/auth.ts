export function getAccessToken() {
  return localStorage.getItem(process.env.ACCESS_TOKEN_KEY);
}
