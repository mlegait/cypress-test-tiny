/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    const objectWithUrlInside = {
      url: "https://example.cypress.io",
    };
    // Use optional chaining on purpose
    cy.visit(objectWithUrlInside?.url);
  });
});
