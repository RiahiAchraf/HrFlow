declare namespace Cypress {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Chainable<Subject = any> {
    getData(attribute: string): Chainable<JQuery<HTMLElement>>;
  }
}
