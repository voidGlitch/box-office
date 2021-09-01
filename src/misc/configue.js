const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(query_string) {
  const response = await fetch(`${API_BASE_URL}${query_string}`).then(r =>
    r.json()
  );
  // throw new Error('opps error');
  // eslint-disable-next-line
  return response;
}
