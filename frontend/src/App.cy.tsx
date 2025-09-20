import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.intercept('GET', 'http://localhost:3000/scenarios', {
      statusCode: 200,
      body: [
        { id: 1, description: 'hello' },
        { id: 2, description: 'oops' },
      ],
    })
    
    cy.mount(<App />)
    
    cy.contains('hello').should('be.visible')
    cy.contains('oops').should('be.visible')
  })
})
