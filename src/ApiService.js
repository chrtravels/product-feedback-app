const URL = 'http://localhost:3030';

export const getRequests = async () => {
  try {
    const requests = await fetch(URL + '/requests')
      .then((response) => response.json());
    return requests;
  } catch (err) {
    throw new Error('Could not fetch requests');
  }
}
