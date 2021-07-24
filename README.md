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
## Distinctive Features

### Fully configurable

You can modify webpack and babel settings as you want in `webpack.config`.

### Compile typescript with babel

This boilerplate compile typescript with babel for better [build performance and using a single loader in webpack](https://iamturns.com/typescript-babel/).

### Code Splitting with React.lazy

You can split the bundle with React.lazy and dynamic import syntax.

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

Also, ESlint error can stopping build process or operating dev server by `eslint-webpack-plugin`

### Extendable ENV

You can add an custom environment. Requiring new `.env` file and modifying package.json command. If you want to add `.stage.env` to project, you should do like this.

```shell
config
  |- .env.production
  |- .env.development
  |- .env.stage # add new .env.stage file
```

```json
// Add new build, start commands in package.json
// --env args should be same with a new env file suffix(development, production, stage... etc)
 "scripts": {
    "start:dev": "webpack serve --env=env=development --config ./config/webpack/webpack.config.dev.js --open",
    "start:prod": "webpack serve --env=env=production --config ./config/webpack/webpack.config.dev.js --open",
    "start:stage": "webpack serve --env=env=stage --config ./config/webpack/webpack.config.dev.js --open",
    "build:dev": "webpack --env=env=development --config ./config/webpack/webpack.config.js",
    "build:prod": "webpack --env=env=production --config ./config/webpack/webpack.config.js",
    "build:stage": "webpack --env=env=stage --config ./config/webpack/webpack.config.js",
  },
```

### Path Alias

`./src` path alias(`@`) is already set in `tsconfig` and `babel module resolver`. If you want another custom path alias, you should modify both babel and tsconfig settings.

```js
  // webpack.config.js
  ...
  plugins: [
    'babel-plugin-styled-components',
    '@babel/proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@components': './src/components', // add new path alias
        },
      },
    ],
  ],
  ...
```

```json
  // tsconfig.json
  {
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"], // add new path alias
    },
  }
```
### Webpack bundle analyzer

Generate `analysis` folder and reporting HTML when building. Also, You can run analysis with `yarn analyze` command via 8888 port

## Reference

- https://sujinlee.me/webpack-react-tutorial/
- https://ui.toast.com/weekly-pick/ko_20181220