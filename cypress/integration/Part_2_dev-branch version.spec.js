/// <reference types="Cypress" />

describe('Holiday Shopping',()=>{

    //Visit the main page and capture the fullpage applitool screenshot
    it('It should be on homepage and it capture full screen',()=>{
      // Set applitool Eye for Test 1 in the chrome browser with the viewport 1200X800 
       cy.eyesOpen({
           batchName: 'Holiday Shopping',
           appName: 'AppliFashion',
           testName: 'Test 1',
           browser: { width: 1200, height: 800, name: 'chrome' },
         });

        // Visit the main page
        cy.visit('http://demo.applitools.com/tlcHackathonDev.html');

       // Capture the full screenshot of the main window
        cy.eyesCheckWindow({
           tag: 'main Page',
           target: 'window',
           fully: true,
         });
    })
 
 
    //Visit the homepage filter the shoes with Black color and capture only shoes screenshot
    it('Only black color shoes should be visisble',()=>{
       // Set eye for Test 2 in the chrome browser with the viewport 1200X800 
       cy.eyesOpen({
           batchName: 'Holiday Shopping',
           appName: 'AppliFashion',
           testName: 'Test 2',
           browser: { width: 1200, height: 800, name: 'chrome' },
         });
        
       //Visit the main page
        cy.visit('http://demo.applitools.com/tlcHackathonDev.html')
        //Select the Black Color from the left side filter 
        cy.get('#LABEL__containerc__104').click()
        //Click the Filter button
        cy.get('#filterBtn').click()
        // Set eye for Test 3 in the chrome browser with the viewport 1200X800 and capture the screenshot of the result region
        cy.eyesCheckWindow({
          tag: 'filter by color',
          target: 'region',
          selector: '#product_grid'
        });
    })
 
       //Visit the main page, select Appli Air x Night and select product detail page full screenshot 
       it('Select the Appli Air x Night without filter and capture fullscreen ',()=>{
         // Set eye for Test 2 in the chrome browser with the viewport 1200X800 and capture the screenshot of the fullpage of the product page
          cy.eyesOpen({
              batchName: 'Holiday Shopping',
              appName: 'AppliFashion',
              testName: 'Test 3',
              browser: { width: 1200, height: 800, name: 'chrome' },
            });
           // Visit the URL 
           cy.visit('http://demo.applitools.com/tlcHackathonDev.html')
           //select and click the product Appli Air x Night
           cy.get('#H3____218').click()
           // wait for 1 sec for page load 
           cy.wait(1000)
           // capture the fullpage screenshot
           cy.eyesCheckWindow({
             tag: 'product details',
             target: 'window',
             fully: true,
           });
       })
    afterEach(()=>{
       cy.eyesClose()
   })
 })
 