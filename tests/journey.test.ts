import { describe, expect, it } from 'vitest';
import { soltarSteps, getStep, getStepByOrder, getNextStep } from '../src/content/soltar/steps';
import { copy, localeLabels } from '../src/content/soltar/i18n';

const locales = ['es', 'en', 'ja'] as const;
const nonempty = (value: unknown): boolean => {
  if (typeof value === 'string') return value.trim().length > 0;
  if (value && typeof value === 'object') return Object.values(value).every(nonempty);
  return false;
};
const shape = (value: unknown): unknown => {
  if (typeof value === 'string') return 'string';
  if (value && typeof value === 'object') return Object.fromEntries(
    Object.entries(value).map(([key, child]) => [key, shape(child)]));
  return typeof value;
};

describe('Soltar journey contract', () => {
  it('has exactly five unique, ordered steps', () => {
    expect(soltarSteps).toHaveLength(5);
    expect(soltarSteps.map(s => s.order)).toEqual([1,2,3,4,5]);
    expect(new Set(soltarSteps.map(s => s.id)).size).toBe(5);
  });
  it('resolves every step by slug and order, rejects unknown slugs', () => {
    for (const step of soltarSteps) {
      expect(getStep(step.id)).toEqual(step);
      expect(getStepByOrder(step.order)).toEqual(step);
    }
    expect(getStep('not-a-step')).toBeUndefined();
  });
  it('moves through the five steps and stops at the final step', () => {
    for (let i = 0; i < 4; i++) expect(getNextStep(soltarSteps[i].id)).toEqual(soltarSteps[i+1]);
    expect(getNextStep(soltarSteps[4].id)).toBeUndefined();
  });
  it('has complete trilingual step content', () => {
    for (const step of soltarSteps) {
      for (const locale of locales) {
        expect(nonempty(step[locale])).toBe(true);
        for (const field of ['description','intro','reflection','completionMessage'] as const) {
          expect(nonempty(step[field][locale])).toBe(true);
        }
      }
    }
  });
  it('keeps every UI copy key populated across all three languages', () => {
    const reference = shape(copy.es);
    for (const locale of locales) {
      expect(nonempty(localeLabels[locale])).toBe(true);
      expect(shape(copy[locale])).toEqual(reference);
      expect(nonempty(copy[locale])).toBe(true);
    }
  });
});
