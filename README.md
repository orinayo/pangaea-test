# Pangaea Challenge
Using the Pangaea Interview GraphQL API (https://pangaea-interviews.now.sh/api/graphql), I created the LuminSkin Product Page UI.
## Description
LuminSkin is an simple web app that enables users add and manage products in their cart.
## Requirement
- `Node`: Any latest version of node above 8.9.0
- `Yarn`: `yarn` is used to install packages (`npm` can be used as an alternative)
- `Git` :  `git` is used as a version control system via `github`
## Installation
- Verify that `node` and `yarn` is installed on your local machine by running the command `node -v` and `yarn -v`
- Clone the repository to the folder of choice using `git clone https://github.com/orinayo/pangaea-test.git`
- In the project root directory install project dependencies using `yarn install`
- To test the project works as expected, run `yarn start`
- Open `http://localhost:3000` on your browser to see the result.
 
## Available Scripts
In the project directory, you can run:

#### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test:e2e:dev`

Launches the test runner in the interactive watch mode

## Test Coverage:
![alt-text](https://user-images.githubusercontent.com/32208591/110368849-ddf94180-8049-11eb-96e8-b0d2a05a1470.png)
## What the page includes:
1. Responsive design of the website - as close to the mockup as possible.
2. A navigation bar, header, and list of products.
3. A sidebar cart.
## What the page does not include:
1. Pagination/Filter functionality
2. The other tabs in the navigation bar (Shop and Learn)

## Possible improvements
Use fixtures in Cypress test and intercept API requests