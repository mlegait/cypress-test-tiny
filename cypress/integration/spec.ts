/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    const url: string = "https://example.cypress.io";
    cy.log("url", url);
    cy.visit(url);
  });
});
