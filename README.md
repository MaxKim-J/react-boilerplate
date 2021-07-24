# React Boilerplate

Modern SPA React boilerplate

## TODO

- [x] React
- [x] Styled Components
    - [x] babel setting(plugin)
- [x] TypeScript
    - [x] TSC type checker
    - [x] path alias
- [x] Multiple ENV change
- [x] Babel
  - [x] Typescript Compiling
  - [x] React Presets
  - [x] Apply path alias when compiling typescript
- [x] WebPack
  - [x] Hot Module Replacement
  - [x] Sourcemap
  - [x] Webpack bundle Analyzer
  - [x] Dynamic Import - code splitting
  - [x] tree shaking(Minimize)
  - [x] split chunks option
  - [x] file loader
  - [x] eslint loader
- [x] eslint
- [ ] ~~docker~~

## Usage

git clone and start development your React App

```shell
git clone https://github.com/MaxKim-J/react-boilerplate
```

`yarn start:${env}` for HMR  
`yarn build:${env}` for production build  

```shell
yarn start:dev
yarn start:prod

yarn build:dev
yarn build:prod
```

You can add an custom environment. Requiring new `.env` file and modifying package.json command. If you want to add `.stage.env` to project, you should do like this.

```shell
config
  |- .env.production
  |- .env.development
  |- .env.stage # add new .env.stage file
```

```json
// add new build, start commands in package.json
// --env args should be same with a new env file suffix(development, production, stage... etc)
 "scripts": {
    "start:dev": "webpack-dev-server --env development --config ./config/webpack/webpack.config.dev.js --open",
    "start:prod": "webpack-dev-server --env production --config ./config/webpack/webpack.config.dev.js --open",
    "start:stage": "webpack-dev-server --env stage --config ./config/webpack/webpack.config.dev.js --open",
    "build:dev": "webpack --env development --config ./config/webpack/webpack.config.js",
    "build:prod": "webpack --env production --config ./config/webpack/webpack.config.js",
    "build:stage": "webpack --env stage --config ./config/webpack/webpack.config.js",
    ...
  },
```
## Distinctive Features

### Compile typescript with babel

reason
... and check type later, with yarn command

### Code Splitting with React.lazy

you can split the bundle with React.lazy

### Tree Shaking

### Strict ESlint and TS rules.

While compiling typescript with babel, type checking is not operating simultaneously.
So, Boilerplate should have strict rules to detect bugs as much as possible.
You can exclude or disable those rules as you want.  
If you want to enable eslint error checking in vscode, edit settings.json

```json
  ...
  "eslint.validate": ["typescript", "typescriptreact"]
  ...
```

Also capturing error in start and build process. 

### Extendable ENV

Just add ENV and yarn command

### Path Alias

should modify both babel and tsconfig

### Webpack bundle analyzer

Generate `analysis` file when building. Also, You can run analysis with `yarn analyze` command via 8888 port


## Reference

- https://sujinlee.me/webpack-react-tutorial/
- https://ui.toast.com/weekly-pick/ko_20181220