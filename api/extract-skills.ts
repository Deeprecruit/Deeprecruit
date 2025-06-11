import { extractSkills } from '../lib/ai';
import { candidates } from '../lib/data';

export function handler() {
  const result = extractSkills(candidates[0]);
  return result;
} 