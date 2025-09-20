import React from 'react';
import { expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from '../src/App';

import { http, HttpResponse } from 'msw'
import { test } from './setup'

const app = {
  title: () => screen.getByText('Scenario Manager')
}

test('renders name',async ({
  server,
}) => {
  
  server.use(
    http.get('/scenarios', () => HttpResponse.json([]))
  );

  render(<App />)

  await expect(app.title()).toBeInTheDocument();
})
