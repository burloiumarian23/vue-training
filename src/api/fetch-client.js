export const postJson = (url, options = {}) => {
  return fetch(url, {
    method: 'post',
    ...options,
    body: JSON.stringify(options.body),
    headers: {
      'content-type': 'application/json',
      ...options.headers,
    },
  })
    .then(res => res.json())
}

export const getJson = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...(options?.headers),
    },
  })
    .then(res => res.json())
}
