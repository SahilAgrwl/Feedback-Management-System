import { Request, Response } from 'express';
import { getFeedbacks, addFeedback } from '../services/feedbackService';

export const getAllFeedback = (req: Request, res: Response) => {
  res.json(getFeedbacks());
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  addFeedback(name, feedback);
  res.status(201).send();
};
