describe("Central de atendimento ao cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o titulo da aplicação", () => {
    cy.title().should("be.equal", "Central de atendimento ao Cliente TAT");
  });

  it.only("preenche os campos obrigatórios e envia o formulário", () => {
    cy.get("#firstName").click().type("Fabricio");
    cy.get("#lastName").click().type("Martins Esteves");
    cy.get("#email").click().type("fabricio.mnesteves@gmail.com");
    cy.get("#open-text-area")
      .click()
      .type("Estou com um problema na minha máquina");
    cy.get('.button[type="submit"]').click();
    cy.get(".success").should("be.visible")
  });
});
