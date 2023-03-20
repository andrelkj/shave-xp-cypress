describe("login", () => {
  context("When submitting the form", () => {
    it("Should log in successfully", () => {
      const user = {
        name: "André",
        email: "test@email.com",
        password: "pwd123",
      };

      cy.visit("http://localhost:3000");

      cy.get('input[placeholder$="email"]').type(user.email);
      cy.get('input[placeholder*="senha"]').type(user.password);

      // button[text()="Entrar"] - Xpath
      // cy.get('button[type=submit]').click() - CSS selector
      cy.contains("button", "Entrar").click(); // Cypress ntegrated locator

      cy.get(".logged-user div a")
        .should("be.visible")
        .should("have.text", "Olá, " + user.name);
    });

    it("Should not log in with wrong password", () => {
      const user = {
        name: "André",
        email: "test@email.com",
        password: "abc123",
      };

      cy.visit("http://localhost:3000");

      cy.get('input[placeholder$="email"]').type(user.email);
      cy.get('input[placeholder*="senha"]').type(user.password);

      cy.contains("button", "Entrar").click();

      const message =
        "Ocorreu um erro ao fazer login, verifique suas credenciais.";

      cy.get(".notice-container")
        .should("be.visible")
        .find(".error p")
        .should("have.text", message);
    });
    

    it("Should not log without a registered email", () => {
      const user = {
        name: "André",
        email: "invalid@email.com",
        password: "pwd123",
      };

      cy.visit("http://localhost:3000");

      cy.get('input[placeholder$="email"]').type(user.email);
      cy.get('input[placeholder*="senha"]').type(user.password);

      cy.contains("button", "Entrar").click();

      const message =
        "Ocorreu um erro ao fazer login, verifique suas credenciais.";

      cy.get(".notice-container")
        .should("be.visible")
        .find(".error p")
        .should("have.text", message);
    });
  });
});
