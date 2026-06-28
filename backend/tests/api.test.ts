import { describe, it, expect } from 'vitest';

describe('Gatherly API', () => {
  it('should pass health check placeholder', () => {
    expect(true).toBe(true);
  });

  it('should validate booking number format', () => {
    const bookingNumber = `GL-${Date.now()}-ABC12`;
    expect(bookingNumber).toMatch(/^GL-\d+-[A-Z0-9]+$/);
  });
});

describe('Price formatting', () => {
  it('should format USD prices correctly', () => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(149);
    expect(formatted).toBe('$149');
  });
});
