# ts-template

A template to be used as a **TypeScript web application**.

## Includes

* NPM configuration (basically, the contents of our old trusty `package.json`)
* TypeScript configuration (configured in `tsconfig.json`)
* Jest setup (tests are executed using `npm run test`)
* webpack configuration (with an HTML template and Sass transpilation)
* ESLint (configured in `.eslintrc.json`)
  * Recommended VSCode setup is to use the ESLint plugin with these (global or project-specific) settings:
    ```
    ...
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll.eslint": true,
        "source.fixAll": true,
    },
    ...
    ```
