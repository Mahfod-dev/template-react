import { describe, expect } from 'vitest';
import { sum } from '../utils/sumNumber';

describe('sum', () => {
  it('should sum two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
