/// <reference types="Cypress" />

describe('Holiday Shopping',()=>{

    //Visit the main page and capture the fullpage applitool screenshot
    it('Access the main page link',()=>{
      // Set applitool Eye for Test 1 in the chrome browser with the viewport 1200X800 
      cy.eyesOpen({
           batchName: 'Holiday Shopping',
           appName: 'AppliFashion',
           testName: 'Test 1',
           browser: { width: 1200, height: 800, name: 'chrome' },
         });
        
        // Visit the main page
        cy.visit('https://demo.applitools.com/tlcHackathonMasterV1.html')

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
       cy.visit('https://demo.applitools.com/tlcHackathonMasterV1.html')
         
        //Select the Black Color from the left side filter 
        cy.get('#LABEL__containerc__104').click()
        //Press the filter button to filter the black color shoes
        cy.get('#filterBtn').click()

        //Capture the screenshot of the search results region
        cy.eyesCheckWindow({
          tag: 'filter by color',
          target: 'region',
          selector: '#product_grid'
        });
    })
 
       //Visit the main page, select Appli Air x Night and select product detail page full screenshot 
       it('Select the Appli Air x Night without filter and capture fullscreen ',()=>{
          //Set applitools eye for test 3
          cy.eyesOpen({
              batchName: 'Holiday Shopping',
              appName: 'AppliFashion',
              testName: 'Test 3',
              browser: { width: 1200, height: 800, name: 'chrome' },
            });
          // visit the main page url
          cy.visit('https://demo.applitools.com/tlcHackathonMasterV1.html')
          // Appli Air x Night
           cy.get('#H3____218').click()
          // wait for the page to load
           cy.wait(1000)
          // capture the full page screenshot the product details page
           cy.eyesCheckWindow({
             tag: 'product details',
             target: 'window',
             fully: true,
           });
       })
    // close applitools eye after the each test
    afterEach(()=>{
       cy.eyesClose()
   })
 })
 