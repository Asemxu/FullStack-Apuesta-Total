// import { describe, it, expect } from 'vitest';
// import { JSDOM } from 'jsdom';
// import Button from '../button.astro?raw';

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
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Button from '../button.astro?raw';

describe('Button Component', () => {
  it('should render button with correct props', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
      props: {
        type: 'submit',
        text: 'Test Button',
        classText: 'custom-class',
        id: 'test-button'
      }
    });

    expect(result).toContain('type="submit"');
    expect(result).toContain('Test Button');
    expect(result).toContain('class="custom-class"');
    expect(result).toContain('id="test-button"');
  });
});