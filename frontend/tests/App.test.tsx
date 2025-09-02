import React from 'react';
import { expect } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../src/App';
import { afterAll, afterEach, beforeAll } from 'vitest'
// import { SetupWorker, setupWorker } from 'msw/browser'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
// import { server } from "./mocks/server";
import { test as testBase } from 'vitest'
import { setupWorker } from 'msw/browser'


const worker = setupWorker(
  http.get('http://localhost:3000/scenarios', () => HttpResponse.json([])),
)



// const worker: SetupWorker = setupWorker()

const test = testBase.extend({
  worker: [
    async ({}, use) => {


      // Start the worker before the test.
      await worker.start()
 
      // Expose the worker object on the test's context.
      await use(worker)
 
      // Remove any request handlers added in individual test cases.
      // This prevents them from affecting unrelated tests.
      worker.resetHandlers()
    },
    {
      auto: true,
    },
  ],
})


test('renders name',async ({
  worker: SetupWorker,
}) => {
  
  // console.log(worker)
  
  /*worker.use(
    rest.get(getApiUrl("posts"), (_, res, ctx) => {
      return res(ctx.status(500), ctx.json({}));
    })
  );*/
  
  // worker.use(
  //   http.get('http://localhost:3000/scenarios', () => {
  //     return new HttpResponse([], { status: 206 })
  //   }),
  // )

  const { getByText } = render(<App />)
  await expect.element(getByText('Scenario Manager')).toBeInTheDocument()
  //await getByRole('button', { name: 'Increment '}).click()
})



// https://mswjs.io/docs/recipes/vitest-browser-mode
// https://vitest.dev/guide/test-context.html#extend-test-context
// https://mswjs.io/docs/api/setup-worker/
