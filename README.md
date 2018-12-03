# AngularVue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

```
npm install --save-dev webpack webpack-cli
npm install --save vue
npm install --save vue-custom-element
npm i -D vue-loader vue-template-compiler css-loader style-loader
npm i -D babel-loader @babel/core @babel/preset-env
```

```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  ...
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  ...
})
```
