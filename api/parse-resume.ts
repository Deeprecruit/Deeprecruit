import { parseResume } from '../lib/ai';

export function handler() {
  const result = parseResume('Sample resume text');
  return result;
} 