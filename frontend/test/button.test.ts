//testing creating components from zero
// import { describe, it, expect } from 'vitest';
// import { JSDOM } from 'jsdom';

// describe('Button Component', () => {
//   it('should render button with correct props', () => {
//     const props = {
//       type: 'submit',
//       text: 'Test Button',
//       classText: 'custom-class',
//       id: 'test-button'
//     };

//     const dom = new JSDOM();
//     global.document = dom.window.document;

//     const button = document.createElement('button');
//     button.id = props.id;
//     button.type = props.type as 'submit' | 'button' | 'reset';
//     button.className = props.classText;
//     button.textContent = props.text;

//     expect(button.id).toBe('test-button');
//     expect(button.type).toBe('submit');
//     expect(button.className).toBe('custom-class');
//     expect(button.textContent).toBe('Test Button');
//   });
// });


import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const button = readFileSync(
  resolve(__dirname, '../src/components/shared/button.astro'),
  'utf-8'
);


describe('Button Component', () => {
  it('should contain expected HTML structure', () => {
    expect(button).toContain('<button');
    expect(button).toContain('class={classText}');
    expect(button).toContain('type={type}');
    expect(button).toContain('id={id}');
  });
});


// import { experimental_AstroContainer as AstroContainer } from 'astro/container';
// import { expect, test } from 'vitest';

// import Button from '../src/components/shared/button.astro'

// test('Card with slots', async () => {
//     const container = await AstroContainer.create();
//     const result = await container.renderToString(Button, {
//       slots: {
//         default: 'Card content',
//       },
//     });
  
//     expect(result).toContain('This is a card');
//     expect(result).toContain('Card content');
//   });