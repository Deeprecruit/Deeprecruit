import { jobMatching } from '../lib/ai';
import { candidates, jobs } from '../lib/data';

// Simulate API handler for AI job matching
export function handler() {
  const result = jobMatching(candidates[0], jobs);
  return result;
} 