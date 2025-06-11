import { interviewQA } from '../lib/ai';

// Simulate API handler for AI interview Q&A
export function handler() {
  const result = interviewQA('What is your experience with cloud computing?');
  return result;
} 