import React, { useState } from 'react';
import axios from '../axios';

interface FeedbackFormProps {
  onAddFeedback: (feedback: { name: string, feedback: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onAddFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/feedback', { name, feedback });
      onAddFeedback({ name, feedback });
      setName('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Feedback:</label>
        <input type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
