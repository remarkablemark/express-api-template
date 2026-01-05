# express-api-template

[![build](https://github.com/remarkablemark/express-api-template/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/express-api-template/actions/workflows/build.yml)

Express API template.

## Prerequisites

[nvm](https://github.com/nvm-sh/nvm#installing-and-updating):

```sh
brew install nvm
```

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/express-api-template.git
cd express-api-template
```

Install the dependencies:

```sh
npm install
```

## Environment Variables

Copy and update the environment variables:

```sh
cp .env.example .env
```

Update the **Secrets** in the repository **Settings**.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The server will reload if you make edits.

You will also see any errors in the console.

### `npm start`

Runs the app in the production mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Lints the files.

### `npm run build`

Builds the app for production to the `build` folder.

## License

[MIT](LICENSE)
