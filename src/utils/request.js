import config from "../config";

export const request = async (url = '/', method = 'GET', body = undefined, queryStrings = {}) => {
  // Define headers
  const headers = {
    'Content-Type': 'application/json'
  };

  // Turn object to query string
  const query = Object.keys({
    ...queryStrings
  })
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryStrings[key])}`)
    .join('&');

  // Turn body into JSON string
  if (body !== undefined) {
    body = JSON.stringify(body);
  }

  // Create a request
  const req = await fetch(`${config.apiBaseUrl}${url}?${query}`, {
    headers,
    method,
    body,
    mode: 'cors'
  });

  // If the server returns 2xx Success then parse its json
  if (req.status >= 200 && req.status < 300) {
    return req.json();
  } else {
    throw new Error(req.statusText);
  }
};