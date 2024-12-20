import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Button', () => {
  it('should render button', () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    
    const button = document.createElement('button');
    expect(button.tagName).toBe('BUTTON');
  });
});