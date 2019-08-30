import { getGreeting } from '../support/app.po';

describe('recommendations', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to recommendations!');
  });
});
