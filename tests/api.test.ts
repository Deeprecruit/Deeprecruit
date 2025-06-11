import * as aiApi from '../api/ai-resume-score';
import * as interviewApi from '../api/interview-qa';
import * as jobApi from '../api/job-matching';
import * as analyticsApi from '../api/analytics';
import * as automationApi from '../api/automation';
import * as parseResumeApi from '../api/parse-resume';
import * as extractSkillsApi from '../api/extract-skills';
import * as predictSalaryApi from '../api/predict-salary';
import * as rankCandidatesApi from '../api/rank-candidates';
import * as analyzeFeedbackApi from '../api/analyze-interview-feedback';

describe('API Handlers', () => {
  test('ai-resume-score handler returns score', () => {
    const result = aiApi.handler();
    expect(result).toHaveProperty('score');
  });
  test('interview-qa handler returns answer', () => {
    const result = interviewApi.handler();
    expect(result).toHaveProperty('answer');
  });
  test('job-matching handler returns bestMatch', () => {
    const result = jobApi.handler();
    expect(result).toHaveProperty('bestMatch');
  });
  test('analytics handler returns analytics data', () => {
    const result = analyticsApi.handler();
    expect(result).toHaveProperty('totalCandidates');
  });
  test('automation handler returns status', () => {
    const result = automationApi.handler();
    expect(result).toHaveProperty('status');
  });
  test('parse-resume handler returns parsed fields', () => {
    const result = parseResumeApi.handler();
    expect(result).toHaveProperty('name');
  });
  test('extract-skills handler returns skills array', () => {
    const result = extractSkillsApi.handler();
    expect(Array.isArray(result)).toBe(true);
  });
  test('predict-salary handler returns a number', () => {
    const result = predictSalaryApi.handler();
    expect(typeof result).toBe('number');
  });
  test('rank-candidates handler returns ranked candidates', () => {
    const result = rankCandidatesApi.handler();
    expect(Array.isArray(result)).toBe(true);
  });
  test('analyze-interview-feedback handler returns analysis', () => {
    const result = analyzeFeedbackApi.handler();
    expect(result).toHaveProperty('sentiment');
  });
}); 