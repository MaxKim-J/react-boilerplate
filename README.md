# React Boilerplate

## TODO

- [x] React
- [ ] React Router
- [ ] Redux + Redux Toolkit
- [ ] React Query
- [x] Styled Components
    - [x] babel setting(plugin)
- [x] TypeScript
    - [x] TSC type checker
    - [x] path alias
- [ ] Jest
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

## Distinctive Features

### Compile typescript with babel

reason
... and check type later, with yarn command

### Code Splitting with dynamic import

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