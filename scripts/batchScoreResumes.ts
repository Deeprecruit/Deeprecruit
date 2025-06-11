import { resumeScore } from '../lib/ai';
import { candidates } from '../lib/data';

// Batch score all candidates and print results
function batchScoreResumes() {
  const results = candidates.map(candidate => ({
    id: candidate.id,
    name: candidate.name,
    score: resumeScore(candidate).score
  }));
  console.log('Batch Resume Scores:', results);
  return results;
}

batchScoreResumes(); 