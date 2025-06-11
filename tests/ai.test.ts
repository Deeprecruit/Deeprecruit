import * as ai from '../lib/ai';

describe('AI Algorithms', () => {
  test('resumeScore returns a score and highlights', () => {
    const result = ai.resumeScore({});
    expect(typeof result.score).toBe('number');
    expect(Array.isArray(result.highlights)).toBe(true);
  });

  test('interviewQA returns answer and followUp', () => {
    const result = ai.interviewQA('What is your experience?');
    expect(typeof result.answer).toBe('string');
    expect(typeof result.followUp).toBe('string');
  });

  test('jobMatching returns bestMatch and reasons', () => {
    const result = ai.jobMatching({}, [{}]);
    expect(result).toHaveProperty('bestMatch');
    expect(Array.isArray(result.reasons)).toBe(true);
  });

  test('analyticsEngine returns analytics data', () => {
    const result = ai.analyticsEngine();
    expect(typeof result.totalCandidates).toBe('number');
    expect(Array.isArray(result.topSkills)).toBe(true);
  });

  test('automationEngine returns workflow status', () => {
    const result = ai.automationEngine();
    expect(typeof result.status).toBe('string');
    expect(typeof result.lastRun).toBe('string');
  });

  test('parseResume returns parsed fields', () => {
    const result = ai.parseResume('Sample resume');
    expect(result).toHaveProperty('name');
    expect(Array.isArray(result.skills)).toBe(true);
  });

  test('extractSkills returns skills array', () => {
    const result = ai.extractSkills({ skills: ['A', 'B'] });
    expect(Array.isArray(result)).toBe(true);
  });

  test('predictSalary returns a number', () => {
    const result = ai.predictSalary({});
    expect(typeof result).toBe('number');
  });

  test('rankCandidates returns ranked candidates', () => {
    const result = ai.rankCandidates([{ id: 1 }], {});
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty('rank');
  });

  test('analyzeInterviewFeedback returns analysis', () => {
    const result = ai.analyzeInterviewFeedback('Great candidate');
    expect(result).toHaveProperty('sentiment');
    expect(result).toHaveProperty('score');
  });
}); 