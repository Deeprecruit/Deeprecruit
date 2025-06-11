import { predictSalary } from '../lib/ai';
import { candidates } from '../lib/data';

export function handler() {
  const result = predictSalary(candidates[0]);
  return result;
} 