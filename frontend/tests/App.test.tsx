import React from 'react';
import { expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from '../src/App';

import { http, HttpResponse } from 'msw'
import { test } from './setup'



test('renders name',async ({
  server,
}) => {
  
  server.use(
    http.get('/scenarios', () => HttpResponse.json([]))
  );

  render(<App />)

  await expect(screen.getByText('Scenario Manager')).toBeInTheDocument();
})


// https://vitest.dev/guide/mocking.html#requests
// https://mswjs.io/docs/recipes/vitest-browser-mode
// https://vitest.dev/guide/test-context.html#extend-test-context
// https://mswjs.io/docs/api/setup-worker/
// https://github.com/mswjs/msw/issues/1657 init mocks with node or browser
// https://github.com/mswjs/examples/tree/main/examples/with-vitest
// https://github.com/vidhiksimform/mock_api_demo
// https://github.com/mswjs/msw/issues/694 clear client cache