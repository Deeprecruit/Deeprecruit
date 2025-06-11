import { resumeScore } from '../lib/ai';
import { candidates } from '../lib/data';

// Notify top candidate (mock)
function notifyTopCandidates() {
  const scored = candidates.map(c => ({ ...c, score: resumeScore(c).score }));
  const top = scored.sort((a, b) => b.score - a.score)[0];
  console.log(`Notification sent to top candidate: ${top.name} (Score: ${top.score})`);
  return top;
}

notifyTopCandidates(); 