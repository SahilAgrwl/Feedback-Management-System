import React from 'react';

interface Feedback {
  name: string;
  feedback: string;
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name}:</strong> {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
