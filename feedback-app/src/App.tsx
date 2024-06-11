import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import axios from './axios';


interface Feedback {
  name: string;
  feedback: string;
}

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const addFeedback = (feedback: Feedback) => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);
  };

  return (
    <div className="App">
      <h1>FEEDBACK MANAGEMENT SYSTEM</h1>
      <FeedbackForm onAddFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
