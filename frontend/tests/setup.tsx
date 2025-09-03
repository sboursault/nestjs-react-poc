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


      // Start the worker before the test.

   //worker.use(
   //  http.get('/scenarios', () => HttpResponse.json([])),
   //)
 
   //console.log('-----$$')
   //console.log(worker.listHandlers())
   //console.log('-----$$')

      // Expose the worker object on the test's context.
      await use(server)
 
      // Remove any request handlers added in individual test cases.
      // This prevents them from affecting unrelated tests.
      server.resetHandlers()
    },
    {
      auto: true,
    },
  ],
})
