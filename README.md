# ⚠️ Pre-requisite 
- [NPM](https://nodejs.org) (It should be installed)
- [node.js](https://nodejs.org/en/download) (It should be installed)
- Google Chrome (>v73)

## Setup 
:point_right: To install the project dependencies, run ```npm i```

## To run the tests 
- Open Cypress GUI runner using the command ```npx cypress open```
- Select the test ```Part_1_v1_Production_Version.spec.js``` to execute the first test and create baseline images in applitools 
- Then select the ```Part_2_dev-branch version.spec.js``` 
- Comapre the result of ```Part_1_v1_Production_Version.spec.js``` and ```Part_2_dev-branch version.spec.js``` and perfrom RCA for failing tests :beetle:
- Then select the ```Part_3_final-production-version.spec.js```
