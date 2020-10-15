# On VSC install these plugins to format your code each before save:
  - eslint
  - prettier

  then add these configurations:
  ```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.format.enable": true,
    "prettier.eslintIntegration": true
  ```
