import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer, SetupServerApi } from 'msw/node'
import { test as testBase } from 'vitest'


const server = setupServer()

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => {
  cleanup();
});


export const test = testBase.extend<{ server: SetupServerApi }>({
  server: [
    async ({}, use) => {


      await use(server)
 
      server.resetHandlers()
    },
    {
      auto: true,
    },
  ],
})
