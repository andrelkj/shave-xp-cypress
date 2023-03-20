# Cypress

Once we're inside the cypress GUI we'll:

1. Select the browser - for the bootcamp we'll be using cypress default browser (Electron)
2. Create your new spec - blank one for this bootcamp (scaffold example specs starts with pre-defined test examples to be used)
3. Enter spec's name - online.cy.js for this bootcamp
4. By there we'll have all necessary information to run it
5. Then we'll only need to change the destination url to `http://localhost:3000` which is our local environment, inside the [online.cy.js file](cypress/e2e/online.cy.js)

**OBS.:** we won't use cypress dashboard to generate reports once it's a paid feature so no account will be created.

## Important notes

Each it test case is independent from one another in cypress, all cache and/or cookies are cleared before starting a new test case, allowing more independence for each test case.

## Tests

### Online

Here we're validating if the page is online or not. We defined a test suite app which contains our test cases.

### Login

Here we're validating all possible login scenarios. We described our login test suite with all it's test cases inside, storing all our test data inside the constant user.

```
describe("login", () => {
  context("When submitting the form", () => {
    it("Should log in successfully", () => {
      const user = {
        email: "test@email.com",
        password: "pwd123",
      };

      cy.visit("http://localhost:3000");
    });
  });
});
```

We also defined a context `context("When submitting the form", ()` inside the suite in order to organize steps by their functionality.

We'll now identify what elements needs to be manipulated in order to:

1. Identify the input field

```
cy.get('input[placeholder="Seu email"]')
cy.get('input[placeholder*="senha"]')
```

**OBS.:** * is used to look for contained elements inside the selector. $ is used to find elements that end with. ^ is used to find elements that starts with.

2. Enter the defined data

````
type(user.email)
type(user.password)
````

3. Find the button and submit the form

````
cy.contains("button", "Entrar").click();
````

4. Validate login

We're going to validate the user name after login to validate not only it the login was successful but inside the correct user as well.

````
cy.get('.logged-user div a')
  .should('be.visible')
  .should('have.text', 'Olá, ' + user.name)
````

**OBS.:** cypress cannot read Xpath, so we need to use either CSS Selectors (class, id, properties) and/or cypress internal integrated locators. For example:

CSS selector: `cy.get('button[type=submit]').click()`
Xpath locator: `button[text()="Entrar"]`
Cypress integrated locator: `cy.contains("button", "Entrar")`


## Terminal commands

- `npx cypress open` - open cypress GUI
- `yarn cypress open` - open cypress GUI
- `yarn dev` - run the application
