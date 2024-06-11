import axios from '../axios';

onmessage = async (event) => {
  if (event.data === 'fetchFeedbacks') {
    try {
      const response = await axios.get('/feedback');
      postMessage(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  }
};
