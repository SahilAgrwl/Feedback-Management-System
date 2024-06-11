interface Feedback {
    name: string;
    feedback: string;
  }
  
  let feedbacks: Feedback[] = [];
  
  export const getFeedbacks = (): Feedback[] => feedbacks;
  
  export const addFeedback = (name: string, feedback: string): void => {
    feedbacks.push({ name, feedback });
  };
  