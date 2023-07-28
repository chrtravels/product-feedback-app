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

export const addComment = async () => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  try {
    const response = await fetch(URL + '/feedback-detail', options);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error adding comment')
  }
}

export const upVote = async (request) => {
  // console.log(request)
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  };

  try {
    const response = await fetch(URL + '/upvote', options);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error adding vote')
  }
}
