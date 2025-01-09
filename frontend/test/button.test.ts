import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';

import Button from '@/components/shared/button.astro'

test('Button', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
      props: {
        id : "id",
        classText : "classText",
        type : "type",
        text : "content"
      }
    
    });
    expect(result).toContain('content');
  });