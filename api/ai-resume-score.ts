import { resumeScore } from '../lib/ai';

// Simulate API handler for AI resume scoring
export function handler() {
  const result = resumeScore({});
  return result;
} 