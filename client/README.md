# The London Institute of Social Studies Project

---

<p >
 *********
</p>

## Features

....

## Screens

...

## Project structure

<details>
  <summary>Project Tree</summary>

  ```
├───index.js
├───App.js
│
├───assets
│   ├───global.scss
│   └───variable.scss
│
├───components
│   ├───*******
│
├───constants
│   ├───*******
│
├───hooks
│   ├───**********
│
├───layouts
│   ├───********
│
├───pages
│   ├───******
│   │
│   ├───auth
│   │   ├───*****
│   │
│   ├───individual
│   │   ├───********
│   │
│   ├───institutional
│   │   ├───********
│   │
│   ├───modals
│   │   ├───*******
│   │       
│   └───page404
│       ├───Page404.js
│
├───store
│   ├───base.js
│   ├───store.js
│   ├───types.js
│   │   
│   ├───actions
│   │   ├───admin.actions.js
│   │   ├───auth.actions.js
│   │   ├───ind.actions.js
│   │   └───ins.actions.js
│   │
│   └───reducers
│       ├───admin.reducer.js
│       ├───auth.reducer.js
│       ├───ind.reducer.js
│       └───ins.reducer.js
│
└───utils
    ├───firstLetter.js
    ├───formatDate.js
    └───getBase64.js

  ```

</details>

## Technologies

| Npm                      |     Version |  Link  |
| :----------------------- | ----------: | :----: |
| axios                    |      0.26.1 | Source |
| react-bootstrap          |       2.2.2 | Source |
| gridjs-react             |       5.0.2 | Source |
| react-google-recaptcha   |       2.1.0 | Source |
| react-icons              |       4.3.1 | Source |
| react                    |      17.0.2 | Source |
| react-avatar-editor      |      13.0.0 | Source |
| react-redux              |       7.2.8 | Source |
| redux-persist            |       6.0.0 | Source |
| redux-promise-middleware |       6.1.2 | Source |
| redux-thunk              |       2.4.1 | Source |
| sass                     |      1.54.4 | Source |


## Contributors

...


## Commit Messages

We categorise git commit messages based on the work being done. There are some tags
you need to use before the actual commit message. You can find more on conventional commit messages [here](https://github.com/conventional-changelog/commitlint).


- All commit messages should be lowercase.
- You can use `()` parantheses after the tag. For example `feat(proposals) : ...`.

> If you try to make a git commit with a message that doesn't fit the format below, it'll not be accepted.

### Here's the list for commit tags:

- `feat` : Use it when developing a new feature.
- `fix` : Use it when fixing a bug or broken functionality.
- `chore` : Not strictly development related tasks. Maintainance etc.
- `refactor` : Use when refactoring an existing code.
- `docs` : Use when documenting stuff.
- `build` : Use when doing a task related to build, continous integration, package publishing etc.
- `perf` : Use when doing a task that will improve performance.
- `ci` : Continous integration related stuff.
- `revert` : Reverting some previous operation.
- `style` : Only visual stuff.
- `test` : Tasks relating to testing suite.

### Here you can find some sample commit messages.

- `fix(addScope): only throw when defaultScope is defined`
- `docs: changelog for 5.0.0-beta.10`
- `chore(package): update @semantic-release/npm to version 4.0.0`
- `feat: association hooks`
- `feat(postgres): drop enum support`
- `feat(validation): improve validation for type`
- `refactor: indexes and uniqueKey`
- `performance: remove terraformer-wkt-parser dependency`

## License

© 2022 The London Institute of Social Studies
