const URL = 'https://product-feedback-app-olive-sigma.vercel.app/';
// const URL = 'http://localhost:3030';

export const getRequests = async () => {
  try {
    const requests = await fetch(URL + '/requests')
      .then((response) => response.json());
    return requests;
  } catch (err) {
    throw new Error('Could not fetch requests');
  }
}

export const addRequest = async (request) => {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  };

  try {
    const response = await fetch(URL + '/new-feedback', options);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error submitting request')
  }
}

export const deleteFeedback = async (feedback) => {
  console.log(feedback)
  const options = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback)
  }

  try {
    const response = await fetch(URL + `/edit-feedback/`, options);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error deleting request')
  }
}

export const updateRequest = async (request) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  };

  try {
    const response = await fetch(URL +  `/edit-feedback`, options);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error updating request')
  }
}

export const addComment = async (comment) => {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment)
  };

  try {
    const response = await fetch(URL + '/feedback-detail/comment', options);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error('Error submitting comment')
  }
}

export const upVote = async (request) => {
  const options = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
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
