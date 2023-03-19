# Cypress

Once we're inside the cypress GUI we'll:
1. Select the browser - for the bootcamp we'll be using cypress default browser (Electron)
2. Create your new spec - blank one for this bootcamp (scaffold example specs starts with pre-defined test examples to be used)
3. Enter spec's name - online.cy.js for this bootcamp
4. By there we'll have all necessary information to run it
5. Then we'll only need to change the destination url to `http://localhost:3000` which is our local environment, inside the [online.cy.js file](cypress/e2e/online.cy.js) 

**OBS.:** we won't use cypress dashboard to generate reports once it's a paid feature so no account will be created.

## Terminal commands
- `npx cypress open` - open cypress GUI
