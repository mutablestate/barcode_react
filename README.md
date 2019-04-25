# Barcode Editor

A barcode editor for an imaginary format.

## Setup Requirements

Make sure to install the supported engines listed in package.json

Follow the installation instructions for your operating system.

1. `node` (https://github.com/creationix/nvm)
2. `yarn` (https://yarnpkg.com/en/docs/install)

## Up and running

The build tool is [ParcelJS](https://parceljs.org/)

```sh
yarn install # install npm packages
yarn start # start the dev server
```

Visit http://localhost:1234

## Documentation

React component library built with [Docz](https://www.docz.site/)

```sh
yarn docs:dev # compile and watch `.mdx` files.
```

## Tests

The testing strategy:

- Unit test public utility functions (Jest)
- Visual regression test the component library (Jest snapshots)
- E2E test the workflow - initial happy path then add as needed (Cypress)

To run the [Jest](https://jestjs.io/) test suite.

```sh
yarn test # single test run
yarn test:watch # run tests when files change
```

To run the [Cypress](https://www.cypress.io/) test suite.

```sh
yarn start # make sure the dev server is running on http://localhost:1234
yarn run cypress:open # opens a new Chrome browser instance and Cypress GUI test runner
yarn run cypress:headless # runs all tests headlessly in the Electron browser
```
