/// <reference types="Cypress" />

describe('Holiday Shopping',()=>{

    //Visit the main page and capture the fullpage applitool screenshot
    it('It should be on homepage and it capture full screen',()=>{
       // Set applitool Eye for Test 1 with different different browser and an iPhone device using Ultrafast grid
       cy.eyesOpen({
           batchName: 'Holiday Shopping',
           appName: 'AppliFashion',
           testName: 'Test 1',
           browser: [
            { width: 1200, height: 800, name: "chrome" },
            { width: 1200, height: 800, name: "firefox" },
            { width: 1200, height: 800, name: "edgechromium" },
            { width: 1200, height: 800, name: "safari" },
            {
              deviceName: "iPhone X",
              screenOrientation: "portrait",
            }
          ],
         });

        // Visit the main page
        cy.visit('https://demo.applitools.com/tlcHackathonMasterV2.html')
        //configuration to capture full screenshot
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
           //Set an array of browsers and Device objects
           browser: [
            { width: 1200, height: 800, name: "chrome" },
            { width: 1200, height: 800, name: "firefox" },
            { width: 1200, height: 800, name: "edgechromium" },
            { width: 1200, height: 800, name: "safari" },
            {
              deviceName: "iPhone X",
              screenOrientation: "portrait",
            }
          ],
         });
        
        //Visit the main page
        cy.visit('https://demo.applitools.com/tlcHackathonMasterV2.html')

        //Select the Black Color from the left side filter 
        cy.get('#LABEL__containerc__104').click()
        //Press the filter button
        cy.get('#filterBtn').click()
        cy.eyesCheckWindow({
          //configuration to capture result screenshot
          tag: 'filter by color',
          target: 'region',
          selector: '#product_grid'
        });
    })
 
       //Visit the main page, select Appli Air x Night and select product detail page full screenshot 
       it('Select the Appli Air x Night without filter and capture fullscreen ',()=>{
          // Set applitool Eye for Test 1 with different different browser and an iPhone device using Ultrafast grid
          cy.eyesOpen({

              batchName: 'Holiday Shopping',
              appName: 'AppliFashion',
              testName: 'Test 3',
              browser: [
                { width: 1200, height: 800, name: "chrome" },
                { width: 1200, height: 800, name: "firefox" },
                { width: 1200, height: 800, name: "edgechromium" },
                { width: 1200, height: 800, name: "safari" },
                {
                  deviceName: "iPhone X",
                  screenOrientation: "portrait",
                }
              ],
            });
           cy.visit('https://demo.applitools.com/tlcHackathonMasterV2.html')
           cy.get('#H3____218').click()
           cy.wait(1000)
           cy.eyesCheckWindow({
            //configuration to capture full screenshot
             tag: 'product details',
             target: 'window',
             fully: true,
           });
       })
    afterEach(()=>{
       cy.eyesClose()
   })
 })
 